import React from "react"

export default function Home(props) {
    return (
        <div className="homeWrapper">
            <h1 className="title">Tomrso's Jelly Esports Quiz</h1>
            <p className="description">How much JELLY lore do you really know?</p>
            <div className="imgWrapper">
                <img src={require("../images/psrascal.png")} alt="this is busted"/>
                <img src={require("../images/mcrascal.png")} alt="this is busted"/>
            </div>
            <button onClick={props.handleClick}>Begin</button>
        </div>
    )
}