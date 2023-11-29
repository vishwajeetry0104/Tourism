import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flex: 1,
    padding: 24
  },
  guideDetailContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  headingTitle: {
    color: '#001A1A',
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 16,
  },
  subTitle: {
    color: '#001A1A',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    paddingBottom: 8,
  },
  bottomButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#008080',
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
    marginTop: 16
  },
  buttonText: {paddingHorizontal: 24, paddingVertical: 8, fontSize: 16, fontWeight: '700', color: '#008080'}
});
