import React from 'react'
import './sign-in.scss'
import { FormInput } from '../controls/form-input/form-input';
import { SignButton } from '../controls/button/signing/button';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = (e) => {
        const {name,value}=e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='sign-in-form'>
                <span>Log in to you account from here .</span>
                <FormInput 
                    handleChange={this.handleChange} 
                    label='Email' 
                    type='email'  
                    name='email' 
                    value={this.state.email} />
                <FormInput 
                    handleChange={this.handleChange} 
                    label='Password'
                    type='password' 
                    name='password' 
                    value={this.state.password} />
                <SignButton type='submit' >Sign In</SignButton>

                <SignButton type='submit' isGoogleBtn onClick={signInWithGoogle}>Google Sign-In</SignButton>
            </form>
        )
    }
}

export default SignIn;