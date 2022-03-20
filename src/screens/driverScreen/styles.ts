import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    width: '100%',
  },
  map: {
    width,
  },
  passengerRequestContainer: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  rejectBtn: {
    backgroundColor: 'red',
  },
});

export default styles;
