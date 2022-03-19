import React, {useRef} from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {MapView, SafeAreaView} from '../../components';
import styles from './styles';

interface IProps {}

const AmbulanceBookScreen: React.FC<IProps> = () => {
  const passengerSheet = useRef<RBSheet>(null);
  return (
    <SafeAreaView>
      <View style={[styles.mapView]}>
        <MapView
          toolbarEnabled={true}
          showsIndoors={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          showsUserLocation
          lat={0}
          long={0}
          style={styles.map}
        />
      </View>
      <RBSheet
        ref={passengerSheet}
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
        <View style={styles.passengerRequestContainer}></View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default AmbulanceBookScreen;
