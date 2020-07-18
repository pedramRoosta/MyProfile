import React from 'react'
import './button.scss'
/**
Require children as button text,isGoogleBtn as if a google btn and ....
 */
export const SignButton=({children,isGoogleBtn,...otherProps})=>
(
    <button className={`${isGoogleBtn ?'google-sign-button':'sign-button'}`} {...otherProps}>{children}</button>
)