import {createSlice} from "@reduxjs/toolkit";
const fetchItemSlice=createSlice({
  name:'fetchStatus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false
  },
  reducers:{
    markFetchDone: (state)=>{
      
       state.fetchDone=true;
    },
    fetchStarted: (state)=>{
       state.currentlyFetching=true;
    },
    fetchEnded: (state)=>{
       state.currentlyFetching=false;
    }
  }
});

export const fetchAction = fetchItemSlice.actions;

export default fetchItemSlice;
