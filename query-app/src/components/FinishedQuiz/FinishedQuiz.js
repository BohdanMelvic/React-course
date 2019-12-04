import React from 'react'
import './FinishedQuiz.css'

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
                <button onClick={props.onRetry}>Retry</button>
            </ul>
        </div>
    )
}
