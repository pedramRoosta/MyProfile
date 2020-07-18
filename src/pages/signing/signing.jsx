import React from 'react'
import './signing.scss'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

export const Signing=()=>
(
    <div className='signing-page'>
        <SignIn/>
        <SignUp/>
    </div>
)