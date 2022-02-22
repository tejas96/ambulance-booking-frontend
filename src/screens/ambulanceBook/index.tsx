import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import {getImage} from '../../assets';
import ImageTag from '../..//assets/images';
import {Button, SafeAreaView} from '../../components';
import useAmbulanceContainer from './container';
import styles from './styles';

interface IProps {}

const AmbulanceBookScreen: React.FC<IProps> = () => {
  const {currentPosition, handleBookAmbulance, dummyCords} =
    useAmbulanceContainer();
  const [region, setRegion] = useState<Region>();
  const handleRegionChange = useCallback((newRegion: Region) => {
    setRegion(newRegion);
  }, []);
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
        <MapView showsUserLocation region={region} style={styles.map}>
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
    </SafeAreaView>
  );
};

export default AmbulanceBookScreen;
