import {configureStore} from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import BagItemSlice from './BagItemSlice';
import fetchItemSlice from './fetchItemSlice';

const store = configureStore({
reducer:{
 itemsSlice: itemsSlice.reducer,
 fetchStatus: fetchItemSlice.reducer,
 BagItems: BagItemSlice.reducer
}
});


export default store;
