import React, { Component } from 'react'


import './TextAreaField.scss'
export class TextAreaField extends Component {
  render() {
    const { name, placeholder, id, cols, rows, value, label } = this.props;
    return (
      <div className='textArea'>
       <label style={!label ? { display: "none" } : { display: "block" }} htmlFor={name}>{label}</label>
        <textarea
          className='textArea-input'
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          value={value}
          placeholder={placeholder}>
        </textarea>

      </div>
    )
  }
}

export default TextAreaField
