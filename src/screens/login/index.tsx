import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input, Button} from '../../components';
import useAuthContainer from './container';
import styles from './styles';

const Login = () => {
  const {
    handleLogin,
    handleComponentStateChange,
    componentState,
    errors,
    loading,
  } = useAuthContainer();
  return (
    <SafeAreaView style={styles.container}>
      <Input
        style={styles.phoneInput}
        value={componentState.userPhoneNumber}
        label="Phone Number"
        placeholder={'Enter Phone Number'}
        keyboardType="number-pad"
        error={errors.userPhoneNumber ? true : false}
        errorMessage={errors.userPhoneNumber}
        onChangeText={(text: string) => {
          handleComponentStateChange('userPhoneNumber', text);
        }}
      />
      <Button loading={loading} mode={'contained'} onPress={handleLogin}>
        GET OTP
      </Button>
    </SafeAreaView>
  );
};

export default Login;
