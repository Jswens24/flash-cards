import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const [idCount, setIdCount] = useState(0)
    const [question, setQuestion] = useState(data[0].question);
    const [answer, setAnswer] = useState(data[0].answer);
    const [flip, setFlip] = useState(true)

    const nextCardHandler = () => {
        setIdCount((idCount) => idCount += 1)
        setQuestion(data[idCount + 1].question);
        setAnswer(data[idCount + 1].answer);
        setFlip(true)
    }
    const lastCardHandler = () => {
        setIdCount((idCount) => idCount -= 1)
        setQuestion(data[idCount - 1].question);
        setAnswer(data[idCount - 1].answer);
        setFlip(true)
    }


    return (
        <div className={flip === false ? 'flex flex-col justify-center items-center bg-green-50' : 'flex flex-col justify-center items-center'}>
            <h4>Click on the card to see the {flip === false ? 'question' : 'answer'}</h4>
            <div className='max-w-sm rounded overflow-hidden shadow-lg px-8 py-6 flex flex-col justify-center items-center text-center'>
                <div onClick={() => setFlip(!flip)} className={flip === true ? 'font-bold text-xl mb-2' : 'hidden'}>
                    <h2>Question: <br />{question}</h2>
                </div>
                <div onClick={() => setFlip(!flip)} className={flip === true ? 'hidden' : 'font-bold text-xl mb-2 text-gray-700 text-base '}>
                    <h3>Answer: <br />{answer}</h3>
                </div>
                {data.length - 1 === idCount ?
                    <div>
                        <button className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={lastCardHandler}>Last Question</button> <Link to='/'> <button onClick={() => setFlip(true)} className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Back to Home</button></Link>
                    </div>
                    :
                    idCount === 0 ? <button className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={nextCardHandler}>Next Question</button> : <div> <button className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={lastCardHandler}>Last Question</button> <button className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={nextCardHandler}>Next Question</button> </div>
                }
            </div >
        </div>
    )
}

export default Card