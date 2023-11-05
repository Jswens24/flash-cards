import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex absolute justify-center flex-col items-center h-full w-full bg-gray-100 '>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 pb-2">Welcome</h1>
            <h3 className='font-bold text-xl'>Select a Topic:</h3>
            <div className='flex flex-wrap justify-center'>
                <Link to='/flashcard/sqlData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>SQL, PostgreSQL, and Sequelize</button>
                </Link>
                <Link to='/flashcard/nodeData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>Node and Express</button>
                </Link>
                <Link to='/flashcard/javascriptData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>Javascript</button>
                </Link>
                <Link to='/flashcard/globalStateReactData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>Global State React</button>
                </Link>
                <Link to='/flashcard/gitGithubData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>Git and Github</button>
                </Link>
                <Link to='/flashcard/cssData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>CSS</button>
                </Link>
                <Link to='/flashcard/reactData'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2'>React</button>
                </Link>
            </div>
        </div>
    )
}

export default Home