import React from 'react';
import {Dish} from '../../types';

interface Props {
  dish: Dish;
}

const DishItem: React.FC<Props> = ({dish}) => {
  const imageStyle = {
    background: `url(${dish.image}) no-repeat center center / cover`,
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-4 rounded-start" style={imageStyle} />
        <div className="col-sm-8 p-2">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text small">{dish.description}</p>
          <p className="card-text">{dish.price} KGS</p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;