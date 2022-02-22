import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ImageTag from '../assets/images';
import {getImage} from '../assets';
import theme from '../config/theme';

const {SIZE} = theme;

interface IProps {
  lat: number;
  long: number;
  type?: 'static';
  title?: string;
  desc?: string;
  style?: StyleProp<ViewStyle>;
}

const StaticMap: React.FC<IProps> = ({
  lat,
  long,
  type = 'static',
  title,
  desc,
  style,
}) => {
  const LAT_LNG_DELTA = 0.007;
  const staticProps = () => {
    if (type === 'static') {
      return {
        zoomControlEnabled: false,
        zoomEnabled: false,
        zoomTapEnabled: false,
        rotateEnabled: false,
        scrollEnabled: false,
        scrollDuringRotateOrZoomEnabled: false,
        pitchEnabled: false,
      };
    }
    return {};
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={[StyleSheet.absoluteFillObject]}
        {...staticProps()}
        toolbarEnabled={true}
        showsIndoors={true}
        zoomControlEnabled={true}
        scrollEnabled={true}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: LAT_LNG_DELTA,
          longitudeDelta: LAT_LNG_DELTA,
        }}>
        <Marker
          coordinate={{latitude: lat, longitude: long}}
          title={title}
          description={desc}
          image={getImage(ImageTag.MAP_PIN)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: SIZE.radius,
    overflow: 'hidden',
  },
});

export default StaticMap;
