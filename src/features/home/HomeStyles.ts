import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#E6F2F2',
    flex: 1
  },
  contentContainerStyle: {
    paddingBottom: 100
  },
  imageBackgroundText: {
    textAlign: 'center',
    fontSize: 56,
    fontWeight: '700',
    lineHeight: 56,
    color: '#FFF',
    marginTop: '40%'

  },
  sectionLabelText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    padding: 16,
    backgroundColor: '#FFF',
    color: '#001A1A'
  },
  flatListContentContainerStyle: {alignItems: 'flex-start', backgroundColor: '#FFFFFF'},
  flatListEmptyComponentContainer: {height: 200, backgroundColor: '#FFF'},
  floatingButtonContainer: {paddingBottom: 16, position: 'absolute', bottom: 0, right: 0, left: 0}
});
