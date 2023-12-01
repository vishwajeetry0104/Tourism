import React from 'react';
import { View, Text } from 'react-native';
import Warning from '../../assets/svg/Warning.svg';
import InfoCardStyles from './InfoCardStyles';

type Props = {
    headingTitle: string,
    message: string,
    testID?: string
}

const InfoCard = (props: Props) => {
    const {headingTitle, message} = props;
  return (
    <View style={InfoCardStyles.container}>
      <Warning height={48} width={48} />
      <Text style={InfoCardStyles.headingTitle}>{headingTitle}</Text>
      <Text style={InfoCardStyles.message}>{message}</Text>
    </View>
  );
}

export default InfoCard;
