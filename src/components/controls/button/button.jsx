import React from 'react'
import './button.scss'
/**
Require children as button text,isGoogleBtn as if a google btn and ....
 */
export const CustomButton=({children,isGoogleBtn,...otherProps})=>
(
    <button className={`${isGoogleBtn ?'google-button':'button'}`} {...otherProps}>{children}</button>
)