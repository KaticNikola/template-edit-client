import React, { Component } from 'react'

import InputField from '../../Components/InputField-Components/InputField'
import SelectField from '../../Components/InputField-Components/SelectField'
import TextAreaField from '../../Components/InputField-Components/TextAreaField'
import FontFamilySelector from '../../Components/InputField-Components/FontFamilySelector'

import { Consumer } from '../../Template/Template-Context/TemplateContext';

import './EditFormText.scss'


//test
import FontPicker from "font-picker-react";
import { SketchPicker } from 'react-color';


export class EditFormText extends Component {

  state = {
    fontFamily: ''
  }
  handleChange = (dispatch, e) => {
    e.preventDefault();

    const property = e.target.name;
    const value = e.target.value;
    const selectedElement = this.props.selectedElement;
    console.log(`from edit 1 ${property}`)
    console.log(`from edit 2${value}`)
    console.log(`from edit 3${selectedElement}`)


    dispatch({
      type: selectedElement,//selectedElement 
      payload: {
        property,
        value
      }
    })

  }
  getFontFamily = (e, dispatch) => {
    console.log(`from parent  ${e}`)
    this.setState({
      fontFamily: e
    })
  }
  handleFontFamilyChange = (dispatch, e) => {

    let value = this.state.fontFamily
    const property = e.target.name;
    const selectedElement = this.props.selectedElement;

    console.log(`from ff 1 ${property}`)
    console.log(`from ff 2${value}`)
    console.log(`from ff 3${selectedElement}`)
    dispatch({
      type: selectedElement,//selectedElement 
      payload: {
        property,
        value
      }
    })
  }

  //test
  // onFontChange = (e, dispatch) => {
  //   this.setState({
  //     activeFontFamily: e.family,
  //   })
  //   console.log(e.family)

  //   const property = 'fontFamily';
  //   const selectedElement = this.props.selectedElement;
  //   const value = e.family
  //   dispatch({
  //     type: selectedElement,//selectedElement 
  //     payload: {
  //       property,
  //       value
  //     }
  //   })

  // }
  render() {
    let selectedElement = this.props.selectedElement
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { content, fontSize, color, lineHeight, letterSpacing,
            marginTop, marginLeft, marginBottom, marginRight,
            paddingTop, paddingLeft, paddingBottom, paddingRight } = this.props.elementToEdit;
          return (
            <div className='text'
              onChange={this.handleChange.bind(this, dispatch)}>

              <div className="text-title">
                Text
              </div>
              <div className="text-field">
                <TextAreaField
                  label='Content'
                  name='content'
                  value={content} />
              </div>
              <div className="text-field">
                <InputField
                  label="Font Size"
                  type="text"
                  name='fontSize'
                  placeholder={fontSize}
                  append='px'
                  value={fontSize}
                />
              </div>
              <div className="text-field">
                <SelectField
                  label="Font Weight"
                  name='fontWeight'
                  options={[
                    { value: "100", label: 100 },
                    { value: "300", label: 300 },
                    { value: "400", label: 400 },
                    { value: "500", label: 500 },
                    { value: "600", label: 600 },
                    { value: "700", label: 700 },
                    { value: "800", label: 800 },
                    { value: "900", label: 900 },

                  ]} />
              </div>


              {/* test */}
             <div className="text-field" onChange={this.handleFontFamilyChange.bind(this, dispatch)}>
                <FontFamilySelector
                  name='fontFamily'
                  selectedElement={selectedElement}
                  getFontFamily={this.getFontFamily}
                  label='Font Family' name='fontFamily' />
              </div>


            

            </div>
          )

        }}
      </Consumer>

    )
  }
}

export default EditFormText
