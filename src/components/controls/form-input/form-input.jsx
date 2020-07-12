import React from 'react'
import './form-input.scss'

export const FormInput = ({ handleChange, label, ...otherProps }) =>
    (
        <div className='form-input-group'>
           
            <input onChange={handleChange} {...otherProps} className='form-input'/>
            {
                label ? <label className={`${otherProps.value.length>0? 'shrink':''} form-input-label`}>{label}</label> : null
            }
            
        </div>
    )