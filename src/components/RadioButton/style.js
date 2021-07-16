import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  roundWrapper: {
    borderColor: '#ff6600',
    borderWidth: 3,
    borderRadius: 1000,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundChild: {
    backgroundColor: '#ff6600',
    borderRadius: 1000,
    width: 10,
    height: 10,
  },
  rBtitle: {
    maxWidth: '80%',
    marginStart: 10,
    fontSize: 17,
  },
});
