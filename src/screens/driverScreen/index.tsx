import React from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button, Loader, MapView, SafeAreaView} from '../../components';
import useDriver from './container';
import styles from './styles';

interface IProps {}

const AmbulanceBookScreen: React.FC<IProps> = () => {
  const {mapRef, state, passengerSheet} = useDriver();

  return (
    <SafeAreaView>
      {state.loading ? (
        <Loader isLoading={true}>null</Loader>
      ) : (
        <>
          <View style={[styles.mapView]}>
            <MapView
              ref={mapRef}
              toolbarEnabled={true}
              showsIndoors={true}
              zoomControlEnabled={true}
              scrollEnabled={true}
              showsUserLocation
              initialRegion={{
                latitude: state.data?.latitude || 0,
                longitude: state.data?.longitude || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              lat={state.data?.latitude || 0}
              long={state.data?.longitude || 0}
              style={styles.map}>
              <Marker
                title="Your Location"
                coordinate={{
                  latitude: state.data?.latitude || 0,
                  longitude: state.data?.longitude || 0,
                }}
              />
            </MapView>
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
                height: 100,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderRadius: 20,
              },
            }}>
            <View style={styles.passengerRequestContainer}>
              <Button>Accept</Button>
              <Button style={styles.rejectBtn}>Reject</Button>
            </View>
          </RBSheet>
        </>
      )}
    </SafeAreaView>
  );
};

export default AmbulanceBookScreen;
