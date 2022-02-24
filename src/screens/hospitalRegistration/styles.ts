import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 0.8,
    width: '100%',
  },
  registerLocationView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '99%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  map: {
    borderRadius: 0,
  },
  bottomSheetContainer: {
    width: '95%',
  },
});

export default styles;
