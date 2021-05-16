import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from './API';
import QuestionCard from './components/QuestionCard';
import {GlobalStyle, Wrapper} from './App.styles';

export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}

const App = () => {
    const TOTAL_QUESTIONS = 10

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)


    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)
        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)
        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer


            if (correct) {
                setScore(prev => prev + 1)
            }

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }

            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nexQuestion = () => {
        const nextQuestion = number + 1

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>REACT QUIZ</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS
                    ? <button className="start"
                              onClick={startTrivia}>
                        Start
                    </button>
                    : null}

                {!gameOver ? <p className="score">Score: {score}</p> : null}

                {loading && <p className="gaga">LoadingQuestions...</p>}

                {(!loading && !gameOver)
                    ? <QuestionCard questionNr={number + 1}
                                    answers={questions[number].answers}
                                    callback={checkAnswer}
                                    question={questions[number].question}
                                    totalQuestions={TOTAL_QUESTIONS}
                                    userAnswer={userAnswers ? userAnswers[number] : undefined}/>
                    : null
                }


                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1
                    ? <button className="next"
                              onClick={nexQuestion}>
                        Next question
                    </button>
                    : null
                }

            </Wrapper>

        </>
    );
}

export default App;