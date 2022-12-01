import './Modal.scss';

const OrderModal = (props) => {

  // const findByKey = (name) =>
  //   props.children.map(child => {
  //     let propsChildren;
  //     if (child.key === name) {
  //       propsChildren = child;
  //     }
  //     return propsChildren;
  //   });

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
            <p className='cta__text'>Are you sure want to order this package?</p>
          </div>
          <div className="modal-footer">
            <button className="modal-close" onClick={closeModal}>Close</button>
            <button className="btn-order">Order</button>
            {props.footer}
          </div>
        </div>
      </div>
    </div >
  )
}

export default OrderModal;
