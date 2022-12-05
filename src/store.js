import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './redux/reducer/cartReducer'
import productReducer from './redux/reducer/productReducer'
import userReducer from './redux/reducer/userReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers( {
  productReducer : productReducer,
  cartReducer : cartReducer,
  userReducer : userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



 const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
  })
export let persistor = persistStore(store)

  
  export default store