import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';
import {storage} from '../utils/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const Store = createStore(persistedReducer);
export const Persistor = persistStore(Store);

export default Store;
