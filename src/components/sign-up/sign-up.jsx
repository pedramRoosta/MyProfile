import React, { Component } from 'react'
import './sign-up.scss'
import { auth, createUserProfile } from '../../firebase/firebase.utils'
import { FormInput } from '../controls/form-input/form-input';
import { SignButton } from '../controls/button/signing/button';
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, confirmPassword, displayName } = this.state;
        if (password !== confirmPassword)
            alert('password and the confirm password does not match !');
        else
            try {
                console.log('try');

                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfile(user, displayName);
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            }
            catch (error) {
                console.log('error'+error.message);

            }
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (<div>
            <form onSubmit={this.handleSubmit} className='sign-up-form'>
                <FormInput
                    label='Display Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                />
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}

                    handleChange={this.handleChange}
                />
                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}

                    handleChange={this.handleChange}
                />
                <FormInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                />
                <SignButton type='submit' >Sign Up</SignButton>
            </form>
        </div>);
    }
}

export default SignUp;