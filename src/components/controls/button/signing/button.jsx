import React from 'react'
import './button.scss'

export const SignButton=({children,isGoogleBtn,...otherProps})=>
(
    <button className={`${isGoogleBtn ?'google-sign-button':'sign-button'}`} {...otherProps}>{children}</button>
)