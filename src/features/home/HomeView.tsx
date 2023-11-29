import React from 'react';
import HighlightCard from "../../components/highlightCard/HighlightCard";
import { ImageBackground, useWindowDimensions, Text, View, ScrollView } from "react-native";
import HuwaiLandscape from '../../assets/images/huwai_landscape.png';
import CategoryItem from "../../components/categoryItem/CategoryItem";
import TappableButton from "../../components/button/TappableButton";
import TravelGuideCard from "../../components/travelGuide/TravelGuideCard";

const HomeView = () => {
  const {width} = useWindowDimensions()
  return (
    <>
      <ScrollView style={{backgroundColor: '#E6F2F2', flex: 1}} contentContainerStyle={{paddingBottom: 100}}>
        <ImageBackground source={HuwaiLandscape} style={{height: (width / 3) * 4, width: width}} resizeMode="cover">
          <Text style={{
            textAlign: 'center',
            fontSize: 56,
            fontWeight: '700',
            lineHeight: 56,
            color: '#FFF',
            marginTop: '40%'
          }}>Welcome to Hawaii</Text>
        </ImageBackground>
        <HighlightCard
          title="Surfing"
          description="Best Hawaiian islands for surfing."
          image="https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
        />
        <TravelGuideCard name="Hadwin Malone" description="Guide since 2012" onContactPress={() => {}} />
      </ScrollView>
      <View style={{paddingBottom: 16, position: 'absolute', bottom: 0, right: 0, left: 0}}>
        <TappableButton title="Book a trip" onButtonPress={() => {}} />
      </View>
    </>
  );
};

export default HomeView;
