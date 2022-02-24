import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mapView: {
    flex: 0.9,
    width: '100%',
  },
  bookingView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '99%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
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
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    width,
  },
});

export default styles;
