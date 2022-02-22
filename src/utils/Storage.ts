import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logger} from '.';
type IKey = 'onboarding' | 'fcmToken';
type IValue = string | boolean | number | null | object;

const getStorage = async (key: IKey) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    Logger.error(
      `getStorage:: unable to fetch data from storage for key ${key}`,
    );
  }
};

const setStorage = async (key: IKey, value: IValue) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    Logger.error(`setStorage:: unable to set data to storage for key ${key}`);
  }
};

const removeStorage = async (key: IKey) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    Logger.error(
      `removeStorage:: unable to remove data from storage for key ${key}`,
    );
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    Logger.error(`clearStorage:: unable to clear storage`);
  }
};

export const Storage = {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
};
