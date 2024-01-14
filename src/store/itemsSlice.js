import {createSlice} from '@reduxjs/toolkit';
const itemsSlice = createSlice({
  name:'itemsSlice',
  initialState: [],
  reducers:{
    addInitialItem : (state,action)=>{
      return action.payload;
    }
  }
 });

 
export const itemsAction = itemsSlice.actions;
export default itemsSlice;