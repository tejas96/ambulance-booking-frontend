import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import MapView from 'react-native-maps';
import theme from '../config/theme';

const {SIZE} = theme;

type IProps = React.ComponentProps<typeof MapView> & {
  lat: number;
  long: number;
  type?: 'static';
  style?: StyleProp<ViewStyle>;
  children?: any;
};

const Map = React.forwardRef<MapView, IProps>(
  ({lat, long, type = 'static', style, children, ...props}, ref) => {
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
          ref={ref}
          style={[StyleSheet.absoluteFillObject]}
          {...staticProps()}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: LAT_LNG_DELTA,
            longitudeDelta: LAT_LNG_DELTA,
          }}
          {...props}>
          {children}
        </MapView>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: SIZE.radius,
    overflow: 'hidden',
  },
});

export default Map;
