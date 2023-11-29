import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: '75%',
    maxWidth: 310
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
