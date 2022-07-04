import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit'


export const contactReducer = createSlice({
  name: 'contact',
  initialState: {
    
  },
  reducers: {
    ADD_CONTACT: (state , action) => {
     
      state[action.payload.id  ]  = action.payload;
    },
    DELETE_CONTACT: (state , action) => {
      // _.omit(state, action.payload);
      delete state[action.payload]
    },
    UPDATE_CONTACT: (state , action) => {
      state[action.payload.id]  = action.payload;
    }
  }
})

export const { ADD_CONTACT, DELETE_CONTACT , UPDATE_CONTACT} = contactReducer.actions
export default contactReducer.reducer


