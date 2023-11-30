import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: windowWidth * 0.80,
    shadowColor: 'rgba(0, 128, 128, 0.16)',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  cardImage: {
    height: 170,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  headingTitle: {
    color: '#008080',
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 16,
  },
  message: {
    color: '#001A1A',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    paddingBottom: 8,
  },
  cardContentContainer: {
    padding: 24
  },
  bottomButtonContainer: {
    height: 40,
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 6
  }
});
