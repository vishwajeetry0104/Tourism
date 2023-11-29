import React from 'react';
import {ActivityIndicator, View, Modal, Text} from 'react-native';
import type {ViewStyle} from 'react-native';
import styles from './SpinnerStyle';
import { useIsFocused } from '@react-navigation/native';


type Props = {
  size?: number | 'small' | 'large';
  hidesWhenStopped?: boolean;
  animating?: boolean;
  inline?: boolean;
  isFocused?: boolean;
  useActivityIndicator?: boolean;
  onDismiss?: () => void;
  style?: ViewStyle;
  color?: string;
  title?: string;
  subTitle?: string;
  testID?: string;
};

const Spinner = (props: Props) => {
  const {
    hidesWhenStopped = true,
    animating = false,
    inline = false,
    isFocused = false,
    useActivityIndicator = true,
    onDismiss = () => {},
    style,
    color,
    title = 'Loading',
    subTitle,
    size = 'large',
    testID
  } = props;

  const isFocusedNavigation = useIsFocused()

  const {
    ActivityIndicatorStyle,
    ActivityIndicatorModalStyle,
    ActivityIndicatorColorStyle,
    titleStyles,
    subTitleStyles
  } = styles;

  const getLoader = () => (
    <>
      <ActivityIndicator
        testID={testID}
        size={size}
        animating={animating}
        hidesWhenStopped={hidesWhenStopped}
        color={color || ActivityIndicatorColorStyle?.color}
      />
      {title !== '' && (
        <Text style={titleStyles}>
          {title}
        </Text>
      )}
      <Text style={subTitleStyles}>
        {subTitle}
      </Text>
    </>
  );

  if (inline && animating) {
    return <View style={[ActivityIndicatorStyle, style]}>{getLoader()}</View>;
  }

  return (
    <Modal onDismiss={onDismiss} transparent visible={animating && (isFocused || isFocusedNavigation)}>
      <View style={ActivityIndicatorModalStyle}>{useActivityIndicator ? getLoader() : <></>}</View>
    </Modal>
  );
};

export default Spinner;
