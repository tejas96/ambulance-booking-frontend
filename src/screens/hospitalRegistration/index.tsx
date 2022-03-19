import React, {useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {Marker} from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button, Input, MapView, SafeAreaView} from '../../components';
import useHospitalRegistration from './container';
import styles from './styles';

interface IProps {}
const HospitalRegistration: React.FC<IProps> = () => {
  const refRBSheet = useRef<RBSheet>(null);
  const {
    registrationForm,
    setRegistrationForm,
    mapRef,
    onMarkerPlace,
    onSubmit,
    apiLoading,
  } = useHospitalRegistration();

  return (
    <SafeAreaView>
      <View style={styles.mapView}>
        <MapView
          showsUserLocation
          scrollEnabled
          zoomControlEnabled
          onPress={onMarkerPlace}
          ref={mapRef}
          style={styles.map}
          lat={registrationForm?.location?.latitude || 0}
          long={registrationForm?.location?.longitude || 0}>
          <Marker
            draggable
            coordinate={{
              latitude: registrationForm?.location?.latitude || 0,
              longitude: registrationForm?.location?.longitude || 0,
            }}
          />
        </MapView>
      </View>
      <View style={styles.registerLocationView}>
        <Button onPress={() => refRBSheet?.current?.open?.()}>
          Register Location
        </Button>
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
        <ScrollView style={styles.bottomSheetContainer}>
          <Input
            value={registrationForm?.hospitalName}
            onChangeText={text => {
              setRegistrationForm(prev => ({
                description: prev?.description || '',
                location: prev?.location,
                hospitalName: text,
              }));
            }}
            label="Hospital Name"
            placeholder="Enter hospital name"
          />
          <Input
            value={registrationForm?.description}
            onChangeText={text => {
              setRegistrationForm(prev => ({
                description: text,
                location: prev?.location,
                hospitalName: prev?.hospitalName || '',
              }));
            }}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            label="Hospital Description"
            placeholder="Enter hospital description"
          />
          <Button loading={apiLoading} disabled={apiLoading} onPress={onSubmit}>
            Submit
          </Button>
        </ScrollView>
      </RBSheet>
    </SafeAreaView>
  );
};

export default HospitalRegistration;
