import { createStore, combineReducers, applyMiddleware } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { addClipReducer } from './addClipReducer';
import { addNewsRedcuer } from './addNewsReducer';

const clipPersistConfig = {
  key: 'clip',
  storage,
  whitelist: ['clip'],
};
const NewsPersistConfig = {
  key: 'news',
  storage,
  whitelist: ['news'],
};
const addClip = persistReducer(clipPersistConfig, addClipReducer);
const addNews = persistReducer(NewsPersistConfig, addNewsRedcuer);
const store = createStore(
  combineReducers({
    addClip,
    addNews,
  }),
  applyMiddleware(thunk)
);

export default store;

export const persistor = persistStore(store);
