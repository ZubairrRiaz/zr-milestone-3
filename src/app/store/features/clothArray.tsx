'use client'
import { Productinfo } from '@/app/components/Products';
import { createSlice } from '@reduxjs/toolkit'
import { clothsArray } from '@/app/components/Products';


// Define a type for the slice state

// Define the initial state using that type
const initialState:Productinfo[] = clothsArray;

export const clothsSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const {  } = clothsSlice.actions



export default clothsSlice.reducer