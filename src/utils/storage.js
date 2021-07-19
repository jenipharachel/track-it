import {Storage} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';

export const storage: Storage = {
  setItem: (key: string, value: string): Promise<boolean> => {
    MMKV.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<string> => {
    const value = MMKV.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string): Promise<void> => {
    MMKV.delete(key);
    return Promise.resolve();
  },
};
