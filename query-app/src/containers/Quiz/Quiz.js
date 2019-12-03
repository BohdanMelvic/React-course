import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quiz: [
                 {
                   answers: [
                       {text: "some text 1"},
                       {text: "some text 2"},
                       {text: "some text 3"},
                       {text: "some text 4"}
                   ]  
                 }
             ]
        }
    }
    
    render() {
        return (
            <div className="Quiz">
               <div className="QuizWrapper">
                <h1>Answer the question:</h1>

                <ActiveQuiz 
                    answers={this.state.quiz[0].answers}
                />
               </div>
            </div>
        )
    }
}

export default Quiz
