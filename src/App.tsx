import { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import DishForm from './components/DishForm/DishForm';
import Dishes from './components/Dishes/Dishes';
import Cart from './components/Cart/Cart';
import { CartDish, Dish } from './types';

const App = () => {
  const [dishes, setDishes] = useState<Dish[]>([
    {
      id: '1',
      name: 'Pilaf',
      description: 'Very tasty pilaf',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-_5MFocNse7mlCokgDqWQRSSIx4eAY0cFw&s',
      price: 250,
    },

    {
      id: '2',
      name: 'Another plov',
      description: 'Also pilaf',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAivly8CUKVHEl6hu4XPp49_0zto_q-5-Ng&s',
      price: 350,
    },
    {
      id: '3',
      name: 'Lagman',
      description: 'Tasty lagman',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWL2wYnE_odLTgc9c3VVAkDExo8Z1jWOx6w&s',
      price: 280,
    },
  ]);

  const [cartDishes, setCartDishes] = useState<CartDish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prevState) => [...prevState, dish]);
  };

  const addDishToCart = (dish: Dish) => {
    setCartDishes((prevState) => {
      const existingIndex = prevState.findIndex((cartDish) => {
        return cartDish.dish.id === dish.id;
      });

      if (existingIndex === -1) {
        return [...prevState, { dish, amount: 1 }];
      } else {
        return prevState.map((cartDish, index) => {
          if (index === existingIndex) {
            return { ...cartDish, amount: cartDish.amount + 1 };
          }
          return cartDish;
        });
      }
    });
  };

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <DishForm onSubmit={addDish} />
          </div>
          <div className="col-4">
            <Dishes dishes={dishes} addToCart={addDishToCart} />
          </div>
          <div className="col-4">
            <Cart cartDishes={cartDishes} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
