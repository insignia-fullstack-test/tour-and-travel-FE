import './Modal.scss';

const Modal = (props) => {

  // const findByKey = (name) =>
  //   props.children.map(child => {
  //     let propsChildren;
  //     if (child.key === name) {
  //       propsChildren = child;
  //     }
  //     return propsChildren;
  //   });

  // const closeModal = (e) => {
  //   e.stopPropagation()

  //   if (e.target.classList.contains('modal-close')) {
  //     props.click()
  //   }
  // }

  return (
    <div className='modal-mask modal-close'>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            {props.header}
          </div>
          <div className="modal-body">
            {props.body}
          </div>
          <div className="modal-footer">
            <button className="modal-close">Close</button>
            <button className="btn-order">Order</button>
            {props.footer}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal;
