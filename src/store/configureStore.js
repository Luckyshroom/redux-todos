import rootReducer from '../reducers'
import storage from 'redux-persist/lib/storage'
import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

store.subscribe(() =>
    console.log(store.getState())
);

export {store, persistor}