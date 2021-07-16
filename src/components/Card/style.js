import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    borderLeftWidth: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bank: {
    textTransform: 'uppercase',
    fontSize: 17,
  },
  left: {
    flex: 0.85,
  },
  right: {
    // flex: 0.3,
    // ...StyleSheet.absoluteFillObject,
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  borderOrange: {
    borderLeftColor: '#ff6600',
  },
  borderGreen: {
    borderLeftColor: '#4fa64f',
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 12,
  },
  pendingButton: {
    borderWidth: 2,
    borderColor: '#ff6600',
  },
  successButton: {
    backgroundColor: '#4fa64f',
  },
  successText: {
    color: 'white',
  },
  pendingText: {
    color: '#000',
  },
});
