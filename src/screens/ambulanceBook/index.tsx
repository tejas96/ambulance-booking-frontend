import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Marker, Region} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button, MapView, SafeAreaView} from '../../components';
import BottomSheetComponent from './BottomSheetComponent';
import useAmbulanceContainer from './container';
import styles from './styles';

interface IProps {}

const origin = {latitude: 16.985416, longitude: 74.619351};
const destination = {latitude: 16.982738, longitude: 74.62007};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAa9t8bwrEpkio5z0wcfuzbG_OhjiXOdbs';

const AmbulanceBookScreen: React.FC<IProps> = () => {
  const {currentPosition, refRBSheet, dummyCords, handleBookAmbulance} =
    useAmbulanceContainer();
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    setRegion({
      latitude: currentPosition.position?.coords.latitude || 0,
      longitude: currentPosition.position?.coords.longitude || 0,
      latitudeDelta: 0.007,
      longitudeDelta: 0.007,
    });
  }, [currentPosition]);
  return (
    <SafeAreaView>
      <View style={[styles.mapView]}>
        <MapView
          toolbarEnabled={true}
          showsIndoors={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          showsUserLocation
          lat={region?.latitude || 0}
          long={region?.longitude || 0}
          style={styles.map}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="hotpink"
            strokeWidth={3}
          />
          {dummyCords.map((item, index) => (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
            />
          ))}
        </MapView>
      </View>
      <View style={[styles.bookingView]}>
        <Button onPress={handleBookAmbulance}>Book Ambulance</Button>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown
        closeOnPressMask={false}
        dragFromTopOnly
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            height: 500,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 20,
          },
        }}>
        <BottomSheetComponent />
      </RBSheet>
    </SafeAreaView>
  );
};

export default AmbulanceBookScreen;
