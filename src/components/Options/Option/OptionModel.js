import React from 'react'
import Modal from 'react-modal'

const OptionModel = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    onRequestClose={props.handleClearOptionModal}
    closeTimeoutMS={200}
    ariaHideApp={false}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {props.selectedOption && (
      <p className='modal__body'>{props.selectedOption}</p>
    )}
    <button className='small-button' onClick={props.handleClearOptionModal}>
      Okay
    </button>
  </Modal>
)

export default OptionModel
