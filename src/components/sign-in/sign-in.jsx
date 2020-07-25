import React from 'react'
import './sign-in.scss'
import { FormInput } from '../controls/form-input/form-input';
import { CustomButton } from '../controls/button/button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        }
        catch (error) {
            console.log('error with sign in process' + error.message)
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
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
                <CustomButton type='submit' >Sign In</CustomButton>

                <CustomButton type='submit' isGoogleBtn onClick={signInWithGoogle}>Google Sign-In</CustomButton>
            </form>
        )
    }
}

export default SignIn;