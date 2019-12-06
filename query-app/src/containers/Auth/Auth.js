import React, { Component } from 'react'
import './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export class Auth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             formControls: {
                 email: {
                     value: '',
                     type: 'email',
                     label: 'Email',
                     errorMessage: 'Enter correct email',
                     valid: false,
                     touched: false,
                     validation: {
                        required: true,
                        email: true
                     }
                 },
                 password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Enter correct password',
                    valid: false,
                     touched: false,
                     validation: {
                        required: true,
                        minLength: 6
                     }
                 }
             }
        }
    }
    

    loginHandler = () => {
        
    }

    signUpHandler = () => {
        
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}`, event.target.value);
    }

    renderInput = () => {
        return Object.keys(this.state.formControls).map( (controlName, index) => {
            const control = this.state.formControls[controlName] 
            return (
                <Input 
                    key={controlName + index}
                    label={control.label}
                    value={control.value} 
                    type={control.type} 
                    valid={control.valid}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className='Auth'>
            <div>
                <h1>Authorization</h1>

                <form 
                    onSubmit={this.submitHandler}
                    className='AuthForm'
                >
                    { this.renderInput() }

                    <Button type='success' onClick={this.loginHandler}>Log In</Button>
                    <Button type='primary' onClick={this.signUpHandler}>Sign Up</Button>
                </form>
            </div>
            </div>
        )
    }
}

export default Auth
