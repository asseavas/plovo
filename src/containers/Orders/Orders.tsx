import { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrders, selectOrdersFetching } from '../../store/ordersSlice';
import { DELIVERY_PRICE } from '../../constants';
import { fetchOrders } from '../../store/ordersThunks';

const Orders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const isFetching = useAppSelector(selectOrdersFetching);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="row mt-2">
      <div className="col">
        <h4 className="mb-2">Orders</h4>
        {isFetching ? (
          <Spinner />
        ) : (
          orders.map((order) => (
            <div key={order.id} className="card mb-2">
              <div className="card-body d-flex gap-4">
                <div className="d-flex flex-column gap-1 flex-grow-1">
                  {order.dishes.map((dishInfo) => (
                    <p
                      key={dishInfo.id}
                      className="d-flex justify-content-between"
                    >
                      {dishInfo.amount} * {dishInfo.title}
                      <strong>{dishInfo.price} KGS</strong>
                    </p>
                  ))}
                  <p className="d-flex justify-content-between">
                    Delivery <strong>{DELIVERY_PRICE} KGS</strong>
                  </p>
                </div>
                <div
                  className="d-flex flex-column gap-1"
                  style={{ width: 400 }}
                >
                  <p>Order total:</p>
                  <strong>{order.totalPrice} KGS</strong>
                  <button className="btn btn-danger">Complete order</button>
                </div>
                <strong>{order.customer.name}</strong>
                <span> ordered for a total price of </span>
                <strong>{order.totalPrice} KGS</strong>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
