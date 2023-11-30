import {StyleSheet} from "react-native";

export default StyleSheet.create({
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  ActivityIndicatorModalStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8
  },
  ActivityIndicatorColorStyle: {
    color: '#001A1A'
  },
  titleStyles: {
    color: '#001A1A',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.24,
    paddingBottom: 8,
  },
  subTitleStyles: {
    color: '#001A1A',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.24,
    paddingBottom: 8,
  }
})
