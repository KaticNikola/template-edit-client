import React, { Component } from 'react'

import InputField from '../../Components/InputField-Components/InputField'
import SelectField from '../../Components/InputField-Components/SelectField'


import { Consumer } from '../../Template/Template-Context/TemplateContext';

import './EditFormText.scss'

export class EditFormText extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { content, fontSize, lineHeight, letterSpacing,
            marginTop, marginLeft, marginBottom, marginRight,
            paddingTop, paddingLeft, paddingBottom, paddingRight } = this.props.elementToEdit;
          return (
            <div className='text'>

              <div className="text-title">

              </div>
              <div className="text-fontsize">
                <InputField
                  label="Font Size"
                  type="text"
                  name='fontSize'
                  placeholder={fontSize}
                  append='px' />
              </div>
              <div className="text-fontWeight">
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

export default EditFormText
