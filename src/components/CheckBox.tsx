import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Checkbox as PaperCheckBox} from 'react-native-paper';
import {Typography} from '.';

type IProps = React.ComponentProps<typeof PaperCheckBox> & {
  label?: string;
  align?: 'left' | 'right' | 'top' | 'bottom';
  style?: StyleProp<TextStyle>;
};

const CheckBox: React.FC<IProps> = ({
  label = '',
  align = 'right',
  onPress = () => {},
  status = 'unchecked',
  ...props
}) => {
  return (
    <View style={[styles.container, getViewStyle(align)]}>
      <Typography type="subHeading">{label}</Typography>
      <PaperCheckBox status={status} onPress={onPress} {...props} />
    </View>
  );
};

const getViewStyle = (align: string): StyleProp<ViewStyle> => {
  switch (align) {
    case 'left':
      return {
        flexDirection: 'row',
        alignItems: 'center',
      };
    case 'right':
      return {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
      };
    case 'top':
      return {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      };
    case 'bottom':
      return {
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
        justifyContent: 'center',
      };
    default:
      break;
  }
  return {};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CheckBox;
