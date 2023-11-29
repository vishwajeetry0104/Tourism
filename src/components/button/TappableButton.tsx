import React from 'react';
import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  title: string,
  onButtonPress: () => void
}

const Styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 16,
    backgroundColor: '#008080',
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 9,
    paddingHorizontal: 24,
    paddingBottom: 11,
    shadowColor: 'rgba(7, 56, 56, 0.80)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20
  }
})

const TappableButton = (props: Props) => {
  const {title, onButtonPress} = props;
  return (
    <Pressable onPress={onButtonPress} style={Styles.buttonContainer}>
      <Text style={Styles.title}>{title}</Text>
    </Pressable>
);
}

export default TappableButton;
