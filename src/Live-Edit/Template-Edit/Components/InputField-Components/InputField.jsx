import React, { Component } from 'react'

import './InputField.scss'
export class InputField extends Component {
  render() {
    const { type, name, placeholder, onChange, value, label, className, min, max, step, append } = this.props;
    return (
      <div className='inputField'>
        <label style={!label ? { display: "none" } : { display: "block" }} htmlFor={name}>{label}</label>
        <div className="inputField-input">
          <input
            type={type}
            name={name}
            value={value}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            onChange={onChange}
          />
          <p className="inputField-input_append" style={!append ? { display: "none" } : { display: "block" }}>
            {append}
          </p>
        </div>


      </div>
    )
  }
}

export default InputField
