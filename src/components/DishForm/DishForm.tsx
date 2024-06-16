import React, {useState} from 'react';
import {Dish, DishMutation} from '../../types';

interface Props {
  onSubmit: (dish: Dish) => void;
}

const DishForm: React.FC<Props> = ({onSubmit}) => {
  const [dishMutation, setDishMutation] = useState<DishMutation>({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const changeDish = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDishMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...dishMutation,
      price: parseFloat(dishMutation.price),
    });

    setDishMutation({
      name: '',
      description: '',
      image: '',
      price: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          onChange={changeDish}
          value={dishMutation.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          onChange={changeDish}
          value={dishMutation.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          required
          className="form-control"
          onChange={changeDish}
          value={dishMutation.image}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          min="1"
          className="form-control"
          onChange={changeDish}
          value={dishMutation.price}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Create</button>
    </form>
  );
};

export default DishForm;