import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ApiOrders, Order, OrderDishInfo } from '../types';
import { AppDispatch, RootState } from '../app/store';
import { DELIVERY_PRICE } from '../constants';

export const fetchOrders = createAsyncThunk<
  Order[],
  void,
  { state: RootState; dispatch: AppDispatch }
>('orders/fetch', async (_arg, thunkAPI) => {
  const { data: apiOrders } = await axiosApi.get<ApiOrders | null>(
    '/orders.json',
  );

  if (!apiOrders) {
    return [];
  }

  await thunkAPI.dispatch(fetchOrders());
  const state: RootState = thunkAPI.getState();
  const dishes = state.dishes.items;

  const orders: Order[] = [];

  Object.keys(apiOrders).forEach((orderId) => {
    const apiOrder = apiOrders[orderId];
    const orderDishInfos: OrderDishInfo[] = [];
    let orderTotalPrice = 0;
    let orderIsComplete = true;

    for (const dishId of Object.keys(apiOrder.dishes)) {
      const dish = dishes.find((d) => d.id === dishId);

      if (!dish) {
        orderIsComplete = false;
        break;
      }

      const dishAmount = apiOrder.dishes[dishId];
      const dishPrice = dishAmount * dish.price;

      orderDishInfos.push({
        id: dishId,
        amount: dishAmount,
        price: dishPrice,
        title: dish.name,
      });

      orderTotalPrice += dishPrice;
    }

    if (orderIsComplete) {
      orders.push({
        id: orderId,
        dishes: orderDishInfos,
        totalPrice: orderTotalPrice + DELIVERY_PRICE,
        customer: apiOrder.customer,
      });
    }
  });

  return orders;
});
