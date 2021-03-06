import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mapView: {
    flex: 0.8,
    width: '100%',
  },
  bookingView: {
    flex: 0.2,
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
  bottomShitBtn: {
    width: 128,
  },
  bottomSheet: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomShitFooter: {
    display: 'flex',
    marginVertical: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    display: 'flex',
    position: 'relative',
  },
  searchResultView: {
    position: 'absolute',
    marginTop: 50,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    maxHeight: 300,
    overflow: 'scroll',
  },
});

export default styles;
