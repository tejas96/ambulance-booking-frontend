import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Divider as PaperDivider} from 'react-native-paper';

interface IProps {
  style?: StyleProp<ViewStyle>;
}
const Divider: React.FC<IProps> = ({style}) => {
  return (
    <>
      <PaperDivider style={[styles.divider, style]} />
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical: 5,
  },
});
export default Divider;
