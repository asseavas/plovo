import React from 'react';
import DishItem from './DishItem';
import { Dish } from '../../types';

interface Props {
  dishes: Dish[];
  addToCart: (dish: Dish) => void;
  deleteDish: (id: string) => void;
}

const Dishes: React.FC<Props> = ({ dishes, addToCart, deleteDish }) => {
  return (
    <div>
      <h4>Dishes</h4>
      {dishes.map((dish) => (
        <DishItem
          key={dish.id}
          dish={dish}
          addToCart={() => addToCart(dish)}
          onDelete={() => deleteDish(dish.id)}
        />
      ))}
    </div>
  );
};

export default Dishes;
