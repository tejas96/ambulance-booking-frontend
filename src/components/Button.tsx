import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {PaperTheme} from '../config';
type IProps = React.ComponentProps<typeof PaperButton> & {
  mode?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
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
    backgroundColor: PaperTheme.colors.accent,
    padding: 5,
    borderRadius: 5,
  },
});
export default Button;
