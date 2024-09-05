import { Order } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './ordersThunks';

export interface OrdersState {
  items: Order[];
  isFetching: boolean;
}

const initialState: OrdersState = {
  items: [],
  isFetching: false,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload: orders }) => {
        state.isFetching = false;
        state.items = orders;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isFetching = false;
      });
  },
  selectors: {
    selectOrders: (state) => state.items,
    selectOrdersFetching: (state) => state.isFetching,
  },
});

export const ordersReducer = ordersSlice.reducer;

export const { selectOrders, selectOrdersFetching } = ordersSlice.selectors;
