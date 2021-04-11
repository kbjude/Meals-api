import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({
  id, name, image, path,
}) => (
  <Link to={path}>
    <div>
      <h5>{id}</h5>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </div>
  </Link>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Meal;
