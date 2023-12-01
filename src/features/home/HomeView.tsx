import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/Hooks";
import {RootState} from "../../store/Store";
import HighlightCard from "../../components/highlightCard/HighlightCard";
import { ImageBackground, useWindowDimensions, Text, View, ScrollView, FlatList, Alert } from "react-native";
import HuwaiLandscape from '../../assets/images/huwai_landscape.png';
import CategoryItem from "../../components/categoryItem/CategoryItem";
import TappableButton from "../../components/button/TappableButton";
import TravelGuideCard from "../../components/travelGuide/TravelGuideCard";
import {fetchHighlights, resetHome, fetchCategories} from "./module/Home";
import Spinner from "../../components/spinner/Spinner";
import InfoCard from "../../components/infoCard/InfoCard";
import Styles from './HomeStyles';

import GradientText from "../../components/gradientText/GradientText";

const HomeView = ({navigation}) => {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();

  const {
    highLights,
    loadingHighlights,
    hasHighlightsFailed,
    hasCategoriesFailed,
    categories,
    loadingCategories
  } = useAppSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchHighlights());
    dispatch(fetchCategories());
    return () => {
      dispatch(resetHome());
    }
  }, []);

  const getRouteName = (title: string) => {
    switch (title) {
      case 'Surfing': return 'Surfing';
      case 'Traditional Festivals': return 'Hula';
      case 'Volcanoes': return 'Vulcano';
      default: return '';
    }
  }

  const renderItem = ({item}) => {
    const onHighlightPress = () => {
      const routeName = getRouteName(item.title);
      navigation.navigate(routeName);
    }
    return (
      <HighlightCard
        testID={item.title}
        title={item.title}
        description={item.description}
        image={item.image}
        onHighlightPress={onHighlightPress}
      />
    )
  }

  const listEmptyComponent = () => {
    if(hasHighlightsFailed) {
      return (
        <View style={[{width: width}, Styles.flatListEmptyComponentContainer]}>
          <InfoCard
            testID='infoCard_highlights'
            headingTitle='No results'
            message={hasHighlightsFailed ? 'Something went wrong': 'Nothing to display'}
          />
        </View>
      )
    }
    return (
      <View style={[{width: width}, Styles.flatListEmptyComponentContainer]}>
        <Spinner testID="loader" animating={loadingHighlights} subTitle="highlights" inline />
      </View>
    )
  };

  const onPressCategory = (name) => {
    Alert.alert(`${name} pressed`);
  }

  return (
    <>
      <ScrollView style={Styles.scrollViewContainer} contentContainerStyle={Styles.contentContainerStyle}>
        <ImageBackground source={HuwaiLandscape} style={{height: (width / 3) * 4, width: width}} resizeMode="cover">
          <GradientText colors={['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.90)']} style={Styles.imageBackgroundText}>
            Welcome to Hawaii
          </GradientText>
        </ImageBackground>
        <Text style={Styles.sectionLabelText}>Highlights</Text>
        <FlatList
          testID="FlatList"
          keyExtractor={(item, index) => index.toString()}
          data={highLights}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent()}
          horizontal
          contentContainerStyle={Styles.flatListContentContainerStyle}
          extraData={{
            hasHighlightsFailed,
            loadingHighlights,
            highLights
          }}
        />
        <Text style={[Styles.sectionLabelText, {backgroundColor: 'transparent'}]}>Catergories</Text>
        {hasCategoriesFailed ? (
          <View style={[Styles.flatListEmptyComponentContainer, {backgroundColor: 'transparent'}]}>
            <InfoCard
              testID='infoCard_categories'
              headingTitle='No results'
              message={hasCategoriesFailed ? 'Something went wrong': 'Nothing to display'}
            />
          </View>
        ) : categories.length === 0 && loadingCategories && (
          <View style={[Styles.flatListEmptyComponentContainer, {backgroundColor: 'transparent'}]}>
            <Spinner testID="loader" animating={loadingHighlights} subTitle="Categories" inline />
          </View>
        )}
        {categories.map((item) => {
          return (
            <CategoryItem key={item.name} name={item.name} onPressCategory={() => onPressCategory(item.name)} />
          )
        })}
        <TravelGuideCard name="Hadwin Malone" description="Guide since 2012" onContactPress={() => {}} />
      </ScrollView>
      <View style={Styles.floatingButtonContainer}>
        <TappableButton title="Book a trip" onButtonPress={() => {}} />
      </View>
    </>
  );
};

export default HomeView;
