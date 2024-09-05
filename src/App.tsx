import Home from './containers/Home/Home';
import NewDish from './containers/NewDIsh/NewDish';
import { Route, Routes } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Order from './containers/Order/Order';
import EditDish from './containers/EditDish/EditDish';
import Orders from './containers/Orders/Orders';
import Layout from './components/Layout/Layout';

const App = () => {
  // const deleteDish = async (id: string) => {
  //   try {
  //     if (window.confirm('Are you sure you want to delete?')) {
  //       await axiosApi.delete(`/dishes/${id}.json`);
  //       await fetchDishes();
  //       toast.success('Dish deleted!');
  //       // dispatch(updateDishes(dishes));
  //     }
  //   } catch (e) {
  //     toast.error('Could not delete dish!');
  //   }
  // };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-dish" element={<NewDish />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route path="continue" element={<Order />} />
        </Route>
        <Route path="/edit-dish/:id" element={<EditDish />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<h1 className="text-center">Not found!</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
