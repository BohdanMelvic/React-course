import React, { Component } from 'react'
import './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import {creatControl, validate, validateForm} from '../../form/formFramework'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function creatOptionControl(number) {
    return creatControl({
        label: `Answer ${number}`,
        errorMessage: 'Write something'
    }, {required: true})
}

function creatFormControl() {
    return {
        question: creatControl({
            label: 'Enter your question',
            errorMessage: 'Write something'
        }, {required: true}),
        option1: creatOptionControl(1),
        option2: creatOptionControl(2),
        option3: creatOptionControl(3),
        option4: creatOptionControl(4)
    }
}

export class QuizCreator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quiz: [],
             isFormValid: false,
             rightAnserId: 1,
             formControls: creatFormControl()
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    addQuestionHandler = (event) => {
        event.preventDefault();
    }

    addTestHandler = (event) => {
        event.preventDefault()
    }

    onChangeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = value;
        control.touched = true;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid : validateForm(formControls)
        })
    }

    renderInputControl = () => {
        return Object.keys(this.state.formControls).map( (controlName, index) =>{
            const control = this.state.formControls[controlName] 
            return (
               <Auxiliary key={controlName + index}>
                <Input 
                    label={control.label}
                    value={control.value}
                    type={control.type} 
                    valid={control.valid}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={(event) => this.onChangeHandler(event.target.value, controlName)}
                />

                {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    selectChangeHandler = (event) => {
        this.setState({
            rightAnserId: +event.target.value
        })
    }
    
    render() {
        return (
            <div className='QuizCreator'>
                <div>
                    <h1>Creating Test</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderInputControl()}
                        
                        <Select 
                            label='Choose the correct answer'
                            value={this.state.rightAnserId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: '1', value: 1},
                                {text: '2', value: 2},
                                {text: '3', value: 3},
                                {text: '4', value: 4}
                            ]}
                        >

                        </Select>

                        <Button type='primary' onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>Add question</Button>
                        <Button type='success' onClick={this.addTestHandler} disabled={!this.state.quiz.length === 0}>Add Test</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator
