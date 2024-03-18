import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor} from './redux/store.js'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/ThemeProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </Provider>,
  </PersistGate>
)

// import {persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import persistStore from 'redux-persist/es/persistStore'

// const rootReducer = combineReducers({
//   user : userReducer
// })
// const persistConfig = {
//   key: 'root',
//   storage,
//   version : 1
// }

// const persistReducer = persistReducer(persistConfig , rootReducer)

// reducer:  persistReducer,
// middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})

// export const persistor = persistStore(store)
