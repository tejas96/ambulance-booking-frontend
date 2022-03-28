import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {createContext, useEffect, useState} from 'react';
import {Storage} from '../utils';

interface AuthProviderProps {
  children: React.ReactNode;
}
interface AuthContextModel {
  user: FirebaseAuthTypes.User | null;
  login: (_: string) => Promise<any>;
  verifyOtp: (_: string) => Promise<any>;
  resendOtp: (_: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextModel>({
  user: null,
  login: (_: string) => Promise.resolve(),
  verifyOtp: (_: string) => Promise.resolve(),
  resendOtp: (_: string) => Promise.resolve(),
  logout: () => Promise.resolve(),
  loading: false,
});

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [otpConfirmResult, setOtpConfirmResult] = useState<
    FirebaseAuthTypes.ConfirmationResult | null | undefined
  >();

  /**
   * login user with phone number
   * @param phoneNumber
   */
  const login = async (phoneNumber: string) => {
    return await auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmationResult => {
        setOtpConfirmResult(confirmationResult);
        return confirmationResult;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };

  /**
   * this method will logout the current login user
   */
  const logout = async (): Promise<void> => {
    await Storage.removeStorage('onboarding');
    auth()
      .signOut()
      .catch(error => {
        console.log(error.message);
      });
  };

  /**
   * after calling login method otp will get send to the
   * given phone number and that will verify using this verifyOtp
   * method
   * @param otp
   * @returns
   */
  const verifyOtp = async (otp: string): Promise<any> => {
    return otpConfirmResult?.confirm(otp).catch(err => {
      return Promise.reject(err);
    });
  };

  /**
   *
   * @param otp
   * @returns
   * @description resend otp in case if user not received it
   */
  const resendOtp = async (otp: string): Promise<void> => {
    return verifyOtp(otp);
  };

  /**
   * @description whatever data you will put here it will available in the Auth context
   */
  const context: AuthContextModel = {
    user,
    login,
    logout,
    verifyOtp,
    loading,
    resendOtp,
  };

  useEffect(() => {
    const unSubscribe = auth().onAuthStateChanged(async authUser => {
      setLoading(false);
      setUser(authUser);
    });
    return unSubscribe;
  }, []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
