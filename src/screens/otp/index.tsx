import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Input} from '../../components';
import {Text} from 'react-native-paper';
import {useSession} from '../../hooks';
import styles from './styles';

const OTP: React.FC = () => {
  const session = useSession();
  const [timer, setTimer] = useState(60);
  const [intervalId, setIntervalId] = useState<any>();
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer: number) => prevTimer - 1);
    }, 1000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, [timer, intervalId]);

  const handleVerifyOtp = () => {
    session
      .verifyOtp(otp)
      .then(() => {})
      .catch(error => {
        if (error.code === 'auth/invalid-verification-code') {
          setOtpError('Invalid OTP');
        } else {
          setOtpError(error.message);
        }
      });
  };

  const handleResendOtp = () => {
    setTimer(60);
    session.resendOtp(otp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.otpContainer}>
        <Input
          placeholder="Enter OTP"
          label="OTP"
          style={styles.otpInput}
          value={otp}
          onChangeText={value => setOtp(value)}
          keyboardType="number-pad"
          errorMessage={otpError}
        />
      </View>
      <Text>{otpError}</Text>
      <Button mode={'contained'} onPress={handleVerifyOtp}>
        Submit
      </Button>
      <Text>Not receive OTP ?</Text>
      <Button
        disabled={timer === 0 ? false : true}
        icon={timer === 0 ? '' : 'clock'}
        onPress={handleResendOtp}>
        {timer === 0 ? 'Resend' : timer}
      </Button>
    </SafeAreaView>
  );
};

export default OTP;
