import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import Styles from './TravelGuideCardStyles';
import Profile from '../../assets/svg/profile.svg'

type Props = {
  name: string,
  description: string,
  onContactPress: () => void
}

const TravelGuideCard = (props: Props) => {
  const {name, description, onContactPress} = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.guideDetailContainer}>
        <View>
          <Text style={Styles.headingTitle}>{name}</Text>
          <Text style={Styles.subTitle}>{description}</Text>
        </View>
        <Profile height={74} width={74} />
      </View>
      <TouchableOpacity onPress={onContactPress} style={Styles.bottomButton}>
        <Text style={Styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TravelGuideCard;
