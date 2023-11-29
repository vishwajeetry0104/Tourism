import React from 'react';
import { View, Text } from 'react-native';
import Styles from './CategoryItemStyles';
import RightArrow from '../../assets/svg/right_arrow.svg';

type Props = {
  name: string
}

const CategoryItem = (props: Props) => {
  const {name} = props;
  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{name}</Text>
      <RightArrow height={16} width={16} />
    </View>
  );
}

export default CategoryItem;
