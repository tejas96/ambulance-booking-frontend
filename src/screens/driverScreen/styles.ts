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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  rejectBtn: {
    backgroundColor: 'red',
  },
  bookingDetailsContainer: {
    width: '100%',
  },
  bookingDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;
