import React from "react"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import {questionList} from "./Questions"
import Navbar from "./components/Navbar"
import "./styles.css"
import Confetti from "react-confetti"
import {TwitterShareButton, TwitterIcon} from "react-share"

export default function App() {
    const [start, setStart] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [formData, setFormData] = React.useState({
        question_1: "",
        question_2: "",
        question_3: "",
        question_4: "",
        question_5: ""        
    })
    const [finished, setFinished] = React.useState(false)
    const [correct, setCorrect] = React.useState(0)
    
    function getQuestions() {
        const shuffled = questionList.sort(() => 0.5 - Math.random())
        setQuestions(shuffled.slice(0, 5))
    }
    function startQuiz() {
        setStart(true)
        getQuestions()
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const selections = [formData.question_1, 
                            formData.question_2, 
                            formData.question_3, 
                            formData.question_4,
                            formData.question_5]
        setFinished(true)
        let count = 0
        for (let i=0; i < 5; i++) {
            for (let j=0; j < 5; j++) {
                if (selections[i] === answers[j]) {
                    count ++
                }
            } 
        setCorrect(count)
        }
    } 
    
    function restart() {
        setFinished(false)
        setStart(false)
        getQuestions()
        setFormData({
        question_1: "",
        question_2: "",
        question_3: "",
        question_4: "",
        question_5: "" })
        setCorrect(0)
    }  

    const submit = <button>Submit</button>
    const tryAgain = <button onClick={restart}>Try Again</button>
    let button
    if (!finished) {
        button = submit
    } else if (finished) {
        button = tryAgain
    }

    let congrats
    if(correct === 5) {
        congrats = <p className="congratsText">Congratulations Jelly Lord, you got {correct}/5 correct answers!</p>
    } else if (correct === 3 | correct === 4 ) {
        congrats = <p className="congratsText">Nice work, you got {correct}/5 correct answers!</p>
    } else {
        congrats = <p className="congratsText">Try again, you got {correct}/5 correct answers!</p>
    }
    let celebrate
    if (finished && correct === 5) {
        celebrate = <Confetti />
    }

    const twitterButton = 
        <TwitterShareButton 
            url="https://jellyquiz.netlify.app/"
            title="I know my @jellyesportsnft lore. How much do you know?"
            className="twitterBtn"
            via="tomrso"
        >   
        <TwitterIcon size={40} round />
        <p className="twitterBtnText">Share With Your Friends</p>
        </TwitterShareButton>
    const answers = []
    var i = 1
    const quizElements = questions.map(item => {
    item["questionNo"] = i++
    answers.push(item.answer)
    return (
        <Quiz 
        finished={finished}
        key={item.id}
        id={item.id}
        question={item.question} 
        options={item.options} 
        answer={item.answer}
        handleChange={handleChange}
        questionNo={item.questionNo}
        />)})

    return (
        <div className="appWrapper">
            {celebrate}
            <Navbar />
            <form onSubmit={handleSubmit}>
            {start ?
            quizElements :
            <Home handleClick={startQuiz}/>}
            {start && button}
            </form>
            {finished && congrats}
            {finished && twitterButton}
        </div>
    )
}