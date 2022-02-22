import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface IProps {
  children: React.ReactNode;
  style?: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SafeAreaViewComponent: React.FC<IProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <SafeAreaView style={[style, styles.container]} {...props}>
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaViewComponent;
