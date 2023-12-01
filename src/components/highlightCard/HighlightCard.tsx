import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Styles from './HighlightCardStyle';
import RightArrowCircle from '../../assets/svg/right_arrow_circle.svg';

type Props = {
  title: string;
  description: string;
  image: string;
  onHighlightPress: () => void;
  testID?: string;
}

const HighLightCard = (props: Props) => {
  const {title, description, image, onHighlightPress} = props;
  return (
    <View style={Styles.container}>
      <Image source={{uri: image}} style={Styles.cardImage} />
      <View style={Styles.cardContentContainer}>
        <Text style={Styles.headingTitle}>{title}</Text>
        <Text style={Styles.message}>{description}</Text>
        <Pressable style={Styles.bottomButtonContainer} onPress={onHighlightPress}>
          <RightArrowCircle height={40} width={40} />
        </Pressable>
      </View>
    </View>
  );
}

export default HighLightCard;
