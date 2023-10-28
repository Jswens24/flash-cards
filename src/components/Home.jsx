import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <h3>Select a Topic</h3>
            <Link to='/flashcard/sqlData'>
                <button>SQL, PostgreSQL, Sequelize</button>
            </Link>
        </div>
    )
}

export default Home