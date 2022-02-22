import React from 'react';
import styles from './styles';
import {Slide} from './data';
import {Animated, useWindowDimensions, View} from 'react-native';
interface IProps {
  slides: Array<Slide>;
  scrollX: any;
}
const Paginator: React.FC<IProps> = ({slides = [], scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.paginator}>
      {slides.map((slide: Slide, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const paginatorWIdth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={slide.id}
            style={[styles.paginatorItem, {width: paginatorWIdth}]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
