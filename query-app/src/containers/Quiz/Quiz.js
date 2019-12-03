import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quiz: []
        }
    }
    
    render() {
        return (
            <div className="Quiz">
               <div className="QuizWrapper">
                <h1>Quiz</h1>

                <ActiveQuiz />
               </div>
            </div>
        )
    }
}

export default Quiz
