'use client'
import { Productinfo } from '@/app/components/Products';
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state

// Define the initial state using that type
let initialState:Productinfo[] = [];

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state,action){
      let uuid = Math.floor(1000+Math.random()*9000)
      let newObj = {...action.payload,uuid}
      state.push(newObj)
    },

    deltItem(state,{payload}){
      let index = state.findIndex((val) => val.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
    
  },
})

export let { addToCart , deltItem } = cartSlice.actions

export default cartSlice.reducer