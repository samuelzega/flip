import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingStart: 10,
    paddingVertical: 20,
  },
  separator: {
    width: '100%',
    backgroundColor: '#e5e4e3',
    height: 2,
  },
  copyIcon: {
    width: 15,
    height: 15,
    padding: 10,
  },
  tutupText: {
    fontSize: 15,
    color: '#ff6600',
    paddingEnd: 10,
  },
  descTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingStart: 10,
    paddingVertical: 12,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 10,
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: 15,
    marginStart: 10,
  },
  flex1: {
    flex: 0.6,
  },
  flex2: {
    flex: 0.4,
  },
  descBox: {
    flexDirection: 'row',
    marginBottom: 15,
  },
});
