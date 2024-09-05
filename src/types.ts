export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export type ApiDish = Omit<Dish, 'id'>;

export interface ApiDishes {
  [id: string]: ApiDish;
}

export interface DishMutation {
  name: string;
  description: string;
  image: string;
  price: string;
}

export type CartDish = {
  dish: Dish;
  amount: number;
};

export interface Customer {
  name: string;
  address: string;
  phone: string;
}

export interface ApiOrderDishes {
  [dishId: string]: number;
}

export interface ApiOrder {
  customer: Customer;
  dishes: ApiOrderDishes;
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}

export interface OrderDishInfo {
  id: string;
  amount: number;
  title: string;
  price: number;
}

export interface Order {
  id: string;
  customer: Customer;
  totalPrice: number;
  dishes: OrderDishInfo[];
}
