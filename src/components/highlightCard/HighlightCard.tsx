import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './HighlightCardStyle';
import RightArrowCircle from '../../assets/svg/right_arrow_circle.svg';

type Props = {
  title: string,
  description: string,
  image: string
}

const HighLightCard = (props: Props) => {
  const {title, description, image} = props;
  return (
    <View style={Styles.container}>
      <Image source={{uri: image}} style={Styles.cardImage} />
      <View style={Styles.cardContentContainer}>
        <Text style={Styles.headingTitle}>{title}</Text>
        <Text style={Styles.message}>{description}</Text>
        <View style={Styles.bottomButtonContainer}>
          <RightArrowCircle height={40} width={40} />
        </View>
      </View>
    </View>
  );
}

export default HighLightCard;
