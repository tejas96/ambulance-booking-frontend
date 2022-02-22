import React, {useState, useEffect, useRef} from 'react';
import {
  ColorValue,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {HelperText} from 'react-native-paper';
import theme from '../config/theme';

const {COLOR, FONT, SIZE} = theme;

export interface TextInputBoxProps extends TextInputProps {
  type?: 'input' | 'text';
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  textBoxStyle?: StyleProp<TextStyle>;
  text?: string;
  onChangeText?: (text: string) => void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showClear?: boolean;
  endIcon?: string;
  endIconClick?: () => void;
  endIconColor?: ColorValue;
  startIcon?: string;
  startIconClick?: () => void;
  startIconColor?: ColorValue;
  onPress?: () => void;
  focus?: boolean;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({
  type = 'input',
  style,
  label,
  error = false,
  errorMessage = 'Error',
  placeholder,
  textBoxStyle,
  text,
  onChangeText,
  onFocus,
  onBlur,
  showClear = true,
  endIcon,
  endIconClick,
  endIconColor,
  startIcon,
  startIconClick,
  startIconColor,
  onPress,
  focus = false,
  multiline,
  placeholderTextColor = COLOR.text2,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const textInputRef = useRef<TextInput | null>(null);

  const isEmpty = text === '';

  const renderEndIcon = () => {
    if (showClear && type !== 'text' && multiline !== true) {
      if (active && !isEmpty) {
        return (
          <Icon
            onClick={() => onChangeText?.('')}
            icon={endIcon}
            color={endIconColor}
          />
        );
      }
    } else if (endIcon) {
      return (
        <Icon onClick={endIconClick} icon={endIcon} color={endIconColor} />
      );
    }
    return null;
  };

  const renderStartIcon = () => {
    if (startIcon) {
      return (
        <Icon
          onClick={startIconClick}
          icon={startIcon}
          style={styles.startIconContainer}
          color={startIconColor}
        />
      );
    }
    return null;
  };

  const getTextBoxStyle = (): StyleProp<TextStyle> => {
    const color = error ? COLOR.danger : COLOR.primary;
    return {
      ...styles.textBox,
      borderWidth: active || error ? 2 : undefined,
      borderColor: color,
      paddingStart: startIcon ? SIZE.m * 2 + 18 : SIZE.m,
      paddingEnd: (showClear && active) || endIcon ? SIZE.m * 2 + 18 : SIZE.m,
    };
  };

  const getTextViewStyle = (): StyleProp<ViewStyle> => {
    const color = error ? COLOR.danger : COLOR.primary;
    return {
      ...styles.typeTextView,
      borderWidth: error ? 2 : undefined,
      borderColor: color,
      paddingStart: startIcon ? SIZE.m * 2 + 18 : SIZE.m,
      paddingEnd: endIcon ? SIZE.m * 2 + 18 : SIZE.m,
    };
  };

  useEffect(() => {
    if (focus) {
      textInputRef.current?.focus();
    }
  }, [focus]);

  if (type === 'input') {
    return (
      <View style={[{justifyContent: 'center'}, style]}>
        {label ? renderLabel(label, error) : null}
        <View>
          <TextInput
            ref={textInputRef}
            placeholder={placeholder}
            style={[getTextBoxStyle(), textBoxStyle]}
            value={text}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            onFocus={e => {
              setActive(true);
              onFocus?.(e);
            }}
            onBlur={e => {
              setActive(false);
              onBlur?.(e);
            }}
            multiline={multiline}
            {...rest}
          />
          {renderStartIcon()}
          {renderEndIcon()}
        </View>
        {error ? (
          <HelperText
            type="error"
            visible
            padding="none"
            style={styles.errorText}>
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
    );
  }

  if (type === 'text') {
    return (
      <View style={[{justifyContent: 'center'}, style]}>
        {label ? renderLabel(label, error) : null}
        <Pressable onPress={onPress}>
          <View
            style={[
              getTextViewStyle(),
              {justifyContent: 'center'},
              textBoxStyle,
            ]}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.typeText, {color: placeholderTextColor}]}
              {...rest}>
              {text ? text : placeholder}
            </Text>
            {renderStartIcon()}
            {renderEndIcon()}
          </View>
        </Pressable>
        {error ? (
          <HelperText
            type="error"
            visible
            padding="none"
            style={styles.errorText}>
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
    );
  }

  return null;
};

interface IconProps {
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: string;
  color?: ColorValue;
}

const Icon: React.FC<IconProps> = ({
  onClick,
  style,
  icon = 'x',
  color = COLOR.text2,
}) => {
  return (
    <View style={[styles.iconContainer, style]}>
      <Pressable onPress={onClick}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

const renderLabel = (label: string, error: boolean) => {
  return (
    <Text
      style={[
        styles.textBoxLabel,
        {color: error ? COLOR.danger : COLOR.text1},
      ]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  textBox: {
    height: 48,
    width: '100%',
    backgroundColor: `${COLOR.border}`,
    borderRadius: SIZE.sm,
    paddingStart: SIZE.m,
    ...FONT.body1,
    color: COLOR.text1,
  },
  iconContainer: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    right: 16,
  },
  icon: {
    height: 18,
    width: 18,
    tintColor: COLOR.text2,
  },
  startIconContainer: {
    right: undefined,
    left: 16,
  },
  errorText: {
    marginStart: 8,
    color: COLOR.danger,
  },
  textBoxLabel: {
    ...FONT.h4,
    color: COLOR.text1,
    marginBottom: 6,
  },
  typeTextView: {
    height: 48,
    width: '100%',
    backgroundColor: `${COLOR.border}`,
    borderRadius: SIZE.sm,
    paddingStart: SIZE.m,
  },
  typeText: {
    ...FONT.body1,
    color: COLOR.text1,
  },
});

export default TextInputBox;
