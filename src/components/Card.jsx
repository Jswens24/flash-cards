import React from 'react'

const Card = ({ question, answer, id }) => {

    return (
        <div>
            <div>
                <h2>{question}</h2>
            </div>
            <div>
                <h3>{answer}</h3>
            </div>
        </div>
    )
}

export default Card