
import React, { Component } from 'react'

import InputField from '../../Components/InputField-Components/InputField'
import SelectField from '../../Components/InputField-Components/SelectField'
import TextAreaField from '../../Components/InputField-Components/TextAreaField'


import { Consumer } from '../../Template/Template-Context/TemplateContext';

import './EditFormButton.scss'

export class EditFormButton extends Component {
	handleChange = (dispatch, e) => {
		e.preventDefault();

		const property = e.target.name;
		const value = `${e.target.value}`;
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

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { content, fontSize, lineHeight, letterSpacing,
            marginTop, marginLeft, marginBottom, marginRight,
            paddingTop, paddingLeft, paddingBottom, paddingRight } = this.props.elementToEdit;
          return (
            <div className='text'
            onChange={this.handleChange.bind(this, dispatch)}>

              <div className="text-title">
                 BUTTON
              </div>
              <div className="text-field">
                <TextAreaField 
                  label='Content'
                  name='content'
                  value={content}/>
              </div>
              <div className="text-field">
                <InputField
                  label="Font Size"
                  type="text"
                  name='fontSize'
                  placeholder={fontSize}
                  append='px' 
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


            </div>
          )

        }}
      </Consumer>

    )
  }
}

export default EditFormButton
