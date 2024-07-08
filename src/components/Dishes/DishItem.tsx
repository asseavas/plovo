import React from 'react';
import { Dish } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  dish: Dish;
  addToCart: VoidFunction;
  onDelete: VoidFunction;
}

const DishItem: React.FC<Props> = ({ dish, addToCart, onDelete }) => {
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
          <p className="d-flex gap-2">
            <button className="btn btn-success" onClick={addToCart}>
              Add
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
            <Link className="btn btn-primary" to={`/edit-dish/${dish.id}`}>
              Edit
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
