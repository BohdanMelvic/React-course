import React, { Component } from 'react'
import './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import {creatControl} from '../../form/formFramework'
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
             formControls: creatFormControl()
        }
    }

    submitHandler = () => {

    }

    addQuestionHandler = () => {

    }

    addTestHandler = () => {

    }

    onChangeHandler = (value, controlName) => {

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
    
    render() {
        return (
            <div className='QuizCreator'>
                <div>
                    <h1>Creating Test</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderInputControl()}
                        
                        <select name="" id=""></select>

                        <Button type='primary' onClick={this.addQuestionHandler}>Add question</Button>
                        <Button type='success' onClick={this.addTestHandler}>Add Test</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator
