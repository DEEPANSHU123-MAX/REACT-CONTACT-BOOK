import contactReducer from './contactReducer'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';



const reducers = combineReducers({
   contactReducer,
});


const persistConfig ={
    key:"persist-key",
    storage
  }
const persistedReducer = persistReducer(persistConfig ,reducers)

export const store = configureStore({
  
    reducer : persistedReducer,
 
})