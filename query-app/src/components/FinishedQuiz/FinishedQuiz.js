import React from 'react'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

export default function FinishedQuiz(props) {
    console.log(props.results)
    const successCount = Object.keys(props.results).reduce( (sum, key) => {
        if (props.results[key] === 'success') {
            sum++;
        }
        return sum;
    }, 0);

    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map( (quizItem, index) => {
                    const classes = [
                        'fa', 
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        props.results[quizItem.id]
                    ];
                    
                    return (
                        <li key={index}>
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                            <i className={classes.join(' ')} />
                        </li>
                    )
                })}
                <p>Correct {successCount} / {props.quiz.length}</p>
                <Button onClick={props.onRetry} type="primary"> Retry </Button>
                <Link to='/'>
                <Button onClick={props.onRetry} type="success"> Test List </Button>
                </Link>
            </ul>
        </div>
    )
}
