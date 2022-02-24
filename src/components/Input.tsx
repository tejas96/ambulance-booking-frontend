import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import theme from '../config/theme';

const {COLOR} = theme;

type IProps = React.ComponentProps<typeof TextInput> & {
  containerStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  style?: StyleProp<TextStyle>;
};

const Input: React.FC<IProps> = ({
  containerStyle,
  onChangeText = () => {},
  value = '',
  mode = 'outlined',
  error = false,
  errorMessage = 'Error!!!',
  style = {},
  ...props
}) => {
  return (
    <View style={[containerStyle]}>
      <TextInput
        style={style}
        activeOutlineColor={error ? COLOR.danger : COLOR.primary}
        outlineColor={error ? COLOR.danger : COLOR.primary}
        mode={mode}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      <HelperText type="error" visible={error}>
        {errorMessage}
      </HelperText>
    </View>
  );
};

export default Input;
