import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
// import {storage} from '../utils/storage';
import {rootSaga} from './sagas';

const middlewareToApply = [];
const sagaMiddleware = createSagaMiddleware();

middlewareToApply.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewares = applyMiddleware(...middlewareToApply);
const persistedReducer = persistReducer(persistConfig, reducers);
const Store = createStore(persistedReducer, middlewares);
// sagaMiddleware.run(rootSaga);
export const Persistor = persistStore(Store);

export default Store;
