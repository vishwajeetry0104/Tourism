import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/Hooks";
import {RootState} from "../../store/Store";
import { ImageBackground, useWindowDimensions, Text, View, ScrollView, Alert } from "react-native";
import CategoryItem from "../../components/categoryItem/CategoryItem";
import TappableButton from "../../components/button/TappableButton";
import TravelGuideCard from "../../components/travelGuide/TravelGuideCard";
import {fetchActivityDetail, resetActivity, ActivityType} from "./module/Activity";
import Spinner from "../../components/spinner/Spinner";
import InfoCard from "../../components/infoCard/InfoCard";
import Styles from './ActivityViewStyles';
import GradientText from "../../components/gradientText/GradientText";
import PlaceHolderImage from '../../assets/images/placeholder.png';

type Props = {
  activityType: ActivityType
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
              testID="infoCard_activity"
              headingTitle='No results'
              message={hasFailed ? 'Something went wrong': 'Nothing to display'}
            />
          </View>
        ) : (
          <>
            <ImageBackground source={activityTypes[activityType]?.image ? {uri: activityTypes[activityType]?.image} : PlaceHolderImage} style={{height: (width / 3) * 2, width: width}} resizeMode="cover">
              <GradientText colors={['rgba(255, 255, 255, 0.20)', 'rgba(255, 255, 255, 0.90)']} style={Styles.imageBackgroundText}>
                {activityTypes[activityType]?.name}
              </GradientText>
            </ImageBackground>
            <Text style={Styles.descriptionText}>{activityTypes[activityType]?.description}</Text>
            <Text style={[Styles.sectionLabelText, {backgroundColor: 'transparent'}]}>Top spots</Text>
            {activityTypes[activityType]?.activities.map((item) => {
              return (
                <CategoryItem
                  testID={item.name}
                  key={item.name}
                  name={item.name}
                  onPressCategory={() => onPressCategory(item.name)}
                />
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
