import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const [idCount, setIdCount] = useState(0)
    const [question, setQuestion] = useState(data[0].question);
    const [answer, setAnswer] = useState(data[0].answer);
    const [flip, setFlip] = useState(false)

    const nextCardHandler = () => {
        setIdCount((idCount) => idCount += 1)
        setQuestion(data[idCount + 1].question);
        setAnswer(data[idCount + 1].answer);
    }

    console.log(flip);


    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg px-6 py-4'>
            <div onClick={() => setFlip(!flip)} className={flip === true ? '' : 'hidden'}>
                <h2>{question}</h2>
            </div>
            <div onClick={() => setFlip(!flip)} className={flip === true ? 'hidden' : ''}>
                <h3>{answer}</h3>
            </div>
            {data.length - 1 === idCount ? <Link to='/'><button>Back to Home</button></Link> : <button onClick={nextCardHandler}>Next Question</button>
            }
        </div >
    )
}

export default Card