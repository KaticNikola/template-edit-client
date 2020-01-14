import React, { Component } from 'react'


import './SelectField.scss'
export class SelectField extends Component {
  render() {
    const { name, className, label, onChange, value, options } = this.props;
    return (
      <div className='selectField'>
        <label style={!label ? { display: "none" } : { display: "block" }} htmlFor={name}>{label}</label>
        <div className="selectField-select">
          <select
            name={name}
            onChange={onChange}
            value={value}
            options={options}>
            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>{option.label}</option>
              )
            })}

          </select>
        </div>
      </div>
    )
  }
}

export default SelectField
