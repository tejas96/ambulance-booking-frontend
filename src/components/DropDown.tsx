import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import theme from '../config/theme';
import {Divider, Modal, Portal} from 'react-native-paper';
import TextInputBox from './Input';
const {COLOR, FONT, SIZE} = theme;

export type DropDownOptionType = {
  label: string;
  value: string;
};

interface IProps {
  options: DropDownOptionType[];
  selectedValue?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  onSelect?: (value: string, index: number) => void;
  style?: StyleProp<ViewStyle>;
  label?: string;
  enabled?: boolean;
}

const DropDown: React.FC<IProps> = ({
  options = [],
  selectedValue,
  placeholder = 'Select',
  error = false,
  errorMessage = 'Select atleast one',
  onSelect,
  style,
  label,
  enabled = true,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextInputBox
        placeholder={placeholder}
        text={selectedValue}
        type="text"
        onPress={() => {
          if (enabled) {
            setOpen(true);
          }
        }}
        error={error}
        errorMessage={errorMessage}
        endIcon="chevron-down"
        style={style}
        label={label}
        {...props}
      />
      <Portal>
        <Modal
          visible={open && enabled}
          onDismiss={() => setOpen(false)}
          style={styles.modalContainerStyle}
          contentContainerStyle={styles.modalStyle}>
          <View style={styles.dropDownItem}>
            <Text style={styles.dropDownTitle}>{placeholder}</Text>
          </View>
          <Divider />
          <ScrollView>
            {options.map((item, index) => (
              <Pressable
                key={item.value}
                onPress={() => {
                  setOpen(false);
                  onSelect?.(item.value, index + 1);
                }}
                android_ripple={{borderless: false, color: COLOR.border}}
                style={[styles.dropDownItem, {alignItems: 'flex-start'}]}>
                <Text style={[styles.dropDownTitle, FONT.body1]}>
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
    marginTop: 0,
  },
  modalStyle: {
    backgroundColor: COLOR.background,
    width: '80%',
    maxHeight: '70%',
    borderRadius: 6,
  },
  dropDownItem: {
    width: '100%',
    paddingVertical: SIZE.m,
    paddingHorizontal: SIZE.l,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownTitle: {
    ...FONT.h3,
    color: COLOR.text1,
  },
});

export default DropDown;
