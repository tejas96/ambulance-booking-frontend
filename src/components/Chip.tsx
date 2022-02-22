import React from 'react';
import {Chip} from 'react-native-paper';

type IProps = React.ComponentProps<typeof Chip> & {
  style?: any;
  onPress: () => void;
  children?: React.ReactNode;
};

const MyChip: React.FC<IProps> = ({
  children = '',
  style = {},
  onPress = (): void => {},
  icon,
  ...rest
}) => (
  <Chip style={[style]} icon={icon} onPress={onPress} {...rest}>
    {children}
  </Chip>
);

export default MyChip;
