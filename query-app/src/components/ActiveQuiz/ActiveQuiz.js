import React from 'react'
import './ActiveQuiz.css'
import AnswerList from './AnswerList/AnswerList'

export default function ActiveQuiz(props) {
    return (
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>{props.questionNumber}. </strong>
                    {props.question}
                </span>
                <small>{props.questionNumber} / {props.quizLength}</small>
            </p>

            <AnswerList 
                answers={props.answers}
                clicked={props.clicked}
                state={props.state}
            />
        </div>
    )
}

