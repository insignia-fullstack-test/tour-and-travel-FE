import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatPrice } from '../../lib/formatPrice';
import { createOrder } from "../../store/actions/order";

import './Modal.scss';

const OrderModal = (props) => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const user = useSelector(state => state.authReducer.user);
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    setQty(e.target.value);
  }

  const confirmOrder = async (e) => {
    e.preventDefault()

    const data = {
      packageId: props.product.id,
      qty: qty,
      price: props.product.price,
    }

    const res = await dispatch(createOrder(data, history)).then(response => ({ response }))
      .catch(error => ({ error }))

    console.log(res)
  }

  const closeModal = (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('modal-close')) {
      props.click();
    }
  }

  return (
    <div className='modal-mask modal-close' onClick={closeModal}>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <h1>Confirm Order</h1>
          </div>
          <div className="modal-body">
            <form onSubmit={confirmOrder}>
              <div className='ma-bt-sm'>
                <label className="form__label">Name</label>
                <input
                  value={user.name}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='First name'
                  disabled
                />
              </div>

              <div className='input-field ma-bt-sm'>
                <label className="form__label">Email</label>
                <input
                  value={user.email}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='Last Name'
                  disabled
                />
              </div>

              <div className='input-field ma-bt-sm'>
                <label className="form__label">Phone</label>
                <input
                  value={user.name}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='Last Name'
                  disabled
                />
              </div>

              <div className='input-field ma-bt-sm'>
                <label className="form__label">Tour Package</label>
                <input
                  value={props.product.name}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='Last Name'
                  disabled
                />
              </div>

              <div className='input-field ma-bt-sm'>
                <label className="form__label">Price</label>
                <input
                  value={formatPrice(props.product.price)}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='Last Name'
                  disabled
                />
              </div>

              <div className='input-field ma-bt-sm'>
                <label className="form__label">Quantity</label>
                <input
                  onChange={handleQty}
                  value={qty}
                  className="form__input"
                  required='required'
                  type="text"
                  placeholder='1'
                />
              </div>
              <p className='cta__text'>Are you sure want to order this package?</p>
              <div className="modal-footer">
                <button className="modal-close" onClick={closeModal}>Close</button>
                <button className="btn-order" type="submit">Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderModal;
