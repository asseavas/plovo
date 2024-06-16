import React from 'react';
import DishItem from './DishItem';
import {Dish} from '../../types';

interface Props {
  dishes: Dish[];
}

const Dishes: React.FC<Props> = ({dishes}) => {
  return (
    <div>
      <h4>Dishes</h4>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Dishes;