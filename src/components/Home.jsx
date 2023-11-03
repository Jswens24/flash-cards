import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex absolute justify-center flex-col items-center h-full w-full '>
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <h3>Select a Topic</h3>
            <Link to='/flashcard/sqlData'>
                <button>SQL, PostgreSQL, and Sequelize</button>
            </Link>
            <Link to='/flashcard/nodeData'>
                <button>Node and Express</button>
            </Link>
            <Link to='/flashcard/javascriptData'>
                <button>Javascript</button>
            </Link>
            <Link to='/flashcard/globalStateReactData'>
                <button>Global State React</button>
            </Link>
        </div>
    )
}

export default Home