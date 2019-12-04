import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             results: {},
             activeQuestion: 0,
             answerState: null,
             isFinished: false,
             quiz: [
                 {  
                    id: 0,
                    question: 'What is the capital of Zimbabwe?',
                    rightAnswerId: 2,
                    answers: [
                       {text: "Kyiv", id: 1},
                       {text: "Harare", id: 2},
                       {text: "London", id: 3},
                       {text: "Reykjavik", id: 4}
                   ]  
                 },
                 {
                    id: 1,
                    question: 'What is the highest mountain?',
                    rightAnswerId: 1,
                    answers: [
                       {text: "Mount Everest", id: 1},
                       {text: "Kilimanjaro", id: 2},
                       {text: "McKinley", id: 3},
                       {text: "Elbrus", id: 4}
                   ]  
                 },
                 {
                    id: 2,
                    question: 'What is the longest river?',
                    rightAnswerId: 4,
                    answers: [
                       {text: "Amazon River", id: 1},
                       {text: "Dnipro", id: 2},
                       {text: "Volga", id: 3},
                       {text: "Nile", id: 4}
                   ]  
                 }
             ]
        }
    }

    retryHandler = () => {
       this.setState({
           activeQuestion: 0,
           answerState: null,
           isFinished: false,
           results: {}
       }) 
    }

    answerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            });

            const timeout = window.setTimeout( () => {
                if ( this.state.activeQuestion + 1 === this.state.quiz.length) {
                    this.setState({isFinished: true})
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            });
        }
    }
    
    render() {
        return (
            <div className="Quiz">
               <div className="QuizWrapper">
                <h1>Answer all questions:</h1>

                { this.state.isFinished 
                    ? <FinishedQuiz 
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                    />
                    : <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        clicked={this.answerClickHandler}
                        quizLength={this.state.quiz.length}
                        questionNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                     />
                }

               
               </div>
            </div>
        )
    }
}

export default Quiz
