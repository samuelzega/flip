import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  headerIcon: {
    width: 15,
    height: 15,
  },
  textInput: {
    paddingVertical: 0,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // zIndex: 100000,
  },
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
