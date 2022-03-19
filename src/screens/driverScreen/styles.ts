import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mapView: {
    flex: 0.7,
    width: '100%',
  },
  map: {
    width,
  },
  passengerRequestContainer: {
    flex: 0.2,
  },
});

export default styles;
