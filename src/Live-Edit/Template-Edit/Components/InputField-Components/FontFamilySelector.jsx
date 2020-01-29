import React, { Component } from "react";
import FontPicker from "font-picker-react";

import { COnsumer, Consumer } from '../../Template/Template-Context/TemplateContext'

import './FontFamilySelector.scss'
export default class FontFamilySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "Open Sans",
    };
  }

  onFontChange = (nextFont, dispatch)=> {
    this.setState({
      activeFontFamily: nextFont.family,
    })

    this.props.getFontFamily(this.state.activeFontFamily)

  }

  render() {
    const { type, name, placeholder, onChange, value, label, min, max, step, append } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='inputField'>
              <label style={!label ? { display: "none" } : { display: "block" }} htmlFor={name}>{label}</label>
              <FontPicker
                className='inputField-input'
                apiKey="AIzaSyDzDtoKSwWe_gYWdefQVMZVd5-Tp-gb1yA"
                activeFontFamily={this.state.activeFontFamily}
                onChange={this.onFontChange}

              />
            </div>
          )
        }}
      </Consumer>

    );
  }
}