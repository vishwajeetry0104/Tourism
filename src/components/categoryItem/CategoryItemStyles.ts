import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 8
  },
  name: {
    color: '#001A1A',
    fontSize: 16,
    fontWeight: '400'
  },
  message: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.24,
    paddingBottom: 8,
  },
});
