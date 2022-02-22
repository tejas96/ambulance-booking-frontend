import React from 'react';
import {Button as PaperButton} from 'react-native-paper';

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
      style={style}
      disabled={disabled}
      mode={mode}
      uppercase={uppercase}
      onPress={onPress}
      {...rest}>
      {rest.children}
    </PaperButton>
  );
};

export default Button;
