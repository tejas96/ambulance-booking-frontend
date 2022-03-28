import React from 'react';
import {View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {MapView, SafeAreaView} from '../../components';
import useTrackingContainer from './container';
import Config from 'react-native-config';
import styles from './styles';

const {GOOGLE_MAP_API_KEY} = Config;

interface IProps {}

const origin = {latitude: 16.985416, longitude: 74.619351};
const destination = {latitude: 16.982738, longitude: 74.62007};

const Tracking: React.FC<IProps> = () => {
  const {} = useTrackingContainer();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          toolbarEnabled={true}
          showsIndoors={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          showsUserLocation
          lat={16.849103}
          long={74.579979}
          style={styles.map}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAP_API_KEY}
            strokeColor="hotpink"
            strokeWidth={3}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Tracking;
