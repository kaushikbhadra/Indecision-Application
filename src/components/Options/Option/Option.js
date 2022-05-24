import React from 'react'

const Option = (props) => {
  return (
    <div className='option'>
      <p className='option__text'>
        {props.count}.{props.optionText}
      </p>

      <button
        className='small-button small-button--link'
        onClick={(e) => {
          props.handleRemoveOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default Option
