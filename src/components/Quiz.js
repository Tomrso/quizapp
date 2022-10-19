import React from "react"
export default function Quiz(props) {
    let buttonA = "button"
    let buttonB = "button"
    let buttonC = "button"
    let buttonD = "button"

    if (props.finished && props.options[0] === props.answer) {
        buttonA = "buttonCorrect"
    } else if (props.finished && props.options[0] !== props.answer) {
        buttonA = "button buttonIncorrect"
    }
    if (props.finished && props.options[1] === props.answer) {
        buttonB = "buttonCorrect"
    } else if (props.finished && props.options[1] !== props.answer) {
        buttonB = "button buttonIncorrect"
    }
    if (props.finished && props.options[2] === props.answer) {
        buttonC = "buttonCorrect"
    } else if (props.finished && props.options[2] !== props.answer) {
        buttonC = "button buttonIncorrect"
    }
    if (props.finished && props.options[3] === props.answer) {
        buttonD = "buttonCorrect"
    } else if (props.finished && props.options[3] !== props.answer) {
        buttonD = "button buttonIncorrect"
    }

    const answer_buttons =
        <div className="buttonWrapper">
            <input
                type="radio"
                id={props.options[0]}
                value={props.options[0]}
                key={props.options[0]}
                name={`question_${props.questionNo}`}
                onChange={props.handleChange}
            />
            <label htmlFor={props.options[0]} className={buttonA}>
                {props.options[0]}
            </label>
            <input 
                type="radio"
                id={props.options[1]}
                value={props.options[1]}
                key={props.options[1]}
                name={`question_${props.questionNo}`}
                onChange={props.handleChange}
            />
            <label htmlFor={props.options[1]} className={buttonB}>
                {props.options[1]}
            </label>
            <input 
                type="radio"
                id={props.options[2]}
                value={props.options[2]}
                key={props.options[2]}
                name={`question_${props.questionNo}`}
                onChange={props.handleChange}
            />
            <label htmlFor={props.options[2]} className={buttonC}>
                {props.options[2]}
            </label>
            <input 
                type="radio"
                id={props.options[3]}
                value={props.options[3]}
                key={props.options[3]}
                name={`question_${props.questionNo}`}
                onChange={props.handleChange}
            />
            <label htmlFor={props.options[3]} className={buttonD}>
                {props.options[3]}
            </label>
        </div>
    
    return (
        <div className="quizWrapper">
            <h1>{props.question}</h1>
            {answer_buttons}
        </div>
    )
}