import { useState } from 'react';
import { useSelector } from 'react-redux';

import { showAlert } from '../../lib/alerts';
import { formatPrice } from '../../lib/formatPrice';
import OrderModal from '../Order/Modal';

const TourCard = (props) => {
  // console.log(props.products)
  const [confirmOrder, setCofirmOrder] = useState(false);

  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  const handleConfirmOrder = () => {
    if (!isLoggedIn) {
      showAlert('error', 'You Must Log in to Order');
    } else {
      setCofirmOrder(true)
    }
  }

  return (
    <div className="card">

      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img className="card__picure-img" src={props.product.image} alt="tour-img" />
        </div>
        <h3 className="heading-tertirary">
          <span>{props.product.name}</span>
        </h3>
      </div>

      <div className="card__details">
        <p className="card__text">{props.product.description}</p>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">{formatPrice(props.product.price)}</span>
          <span className="card__footer-text">/per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.5</span>
          <span className="card__footer-value"> rating (10)</span>
        </p>
        <button className="btn btn--green btn--small" onClick={handleConfirmOrder}>Order</button>
      </div>

      {
        confirmOrder &&
        <OrderModal click={() => setCofirmOrder(false)} product={props.product} />
      }
    </div>
  )
};

export default TourCard;