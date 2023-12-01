import React from 'react';
import { Text, Pressable, View } from 'react-native';
import Styles from './CategoryItemStyles';
import RightArrow from '../../assets/svg/right_arrow.svg';

type Props = {
  name: string,
  onPressCategory: () => void;
  testID?: string;
}


const CategoryItem = (props: Props) => {
  const {name, onPressCategory} = props;
  return (
    <Pressable style={Styles.container} onPress={onPressCategory}>
      <Text style={Styles.name}>{name}</Text>
      <View style={{}}>
        <RightArrow height={16} width={16} />
      </View>
    </Pressable>
  );
}

export default CategoryItem;
