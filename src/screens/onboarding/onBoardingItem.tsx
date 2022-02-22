import React from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import {Slide} from './data';

interface IProps {
  item: Slide;
}

const OnBoardingItem: React.FC<IProps> = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width}]} />
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
