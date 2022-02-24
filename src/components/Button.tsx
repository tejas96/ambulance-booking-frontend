import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import theme from '../config/theme';

const {COLOR} = theme;

type IProps = React.ComponentProps<typeof PaperButton> & {
  mode?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  style?: any;
};

const Button: React.FC<IProps> = ({
  mode = 'contained',
  disabled = false,
  style = {},
  uppercase = false,
  onPress = () => {},
  ...rest
}) => {
  return (
    <PaperButton
      style={[styles.button, style]}
      disabled={disabled}
      mode={mode}
      uppercase={uppercase}
      onPress={onPress}
      {...rest}>
      {rest.children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.primary,
    padding: 5,
  },
});
export default Button;
