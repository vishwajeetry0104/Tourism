import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/Hooks";
import {RootState} from "../../store/Store";
import { ImageBackground, useWindowDimensions, Text, View, ScrollView, Alert } from "react-native";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import TappableButton from "../../components/button/TappableButton";
import TravelGuideCard from "../../components/travelGuide/TravelGuideCard";
import {fetchActivityDetail, resetActivity} from "./module/Activity";
import Spinner from "../../components/spinner/Spinner";
import InfoCard from "../../components/infoCard/InfoCard";
import Styles from './ActivityViewStyles';

type Props = {
  activityType: string
}

const ActivityView = ({activityType}: Props) => {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();

  const {
    activityTypes, loading, hasFailed
  } = useAppSelector((state: RootState) => state.activity);

  useEffect(() => {
    dispatch(fetchActivityDetail({activityType}));
    return () => {
      dispatch(resetActivity());
    }
  }, []);

  const onPressCategory = (name) => {
    Alert.alert(`${name} pressed`);
  }

  return (
    <>
      <ScrollView style={Styles.scrollViewContainer} contentContainerStyle={Styles.contentContainerStyle}>
        {hasFailed ? (
          <View style={[Styles.flatListEmptyComponentContainer, {backgroundColor: 'transparent'}]}>
            <InfoCard
              headingTitle='No results'
              message={hasFailed ? 'Something went wrong': 'Nothing to display'}
            />
          </View>
        ) : (
          <>
            <ImageBackground source={{uri: activityTypes[activityType]?.image || null}} style={{height: (width / 3) * 2, width: width}} resizeMode="cover">
              <Text style={Styles.imageBackgroundText}>{activityTypes[activityType]?.name}</Text>
            </ImageBackground>
            <Text style={Styles.descriptionText}>{activityTypes[activityType]?.description}</Text>
            <Text style={[Styles.sectionLabelText, {backgroundColor: 'transparent'}]}>Top spots</Text>
            {activityTypes[activityType]?.activities.map((item) => {
              return (
                <CategoryItem key={item.name} name={item.name} onPressCategory={() => onPressCategory(item.name)} />
              )
            })}
          </>
        )}
        <TravelGuideCard name="Hadwin Malone" description="Guide since 2012" onContactPress={() => {}} />
      </ScrollView>
      <Spinner testID="loader" animating={loading} subTitle={activityType} />
      <View style={Styles.floatingButtonContainer}>
        <TappableButton title="Book a trip" onButtonPress={() => {}} />
      </View>
    </>
  );
};

export default ActivityView;
