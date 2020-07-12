import React from 'react'
import './button.scss'

export const SignButton=({children,...otherProps})=>
(
    <button className={`${otherProps.btntype==='google'?'google-sign-button':'sign-button'}`} {...otherProps}>{children}</button>
)