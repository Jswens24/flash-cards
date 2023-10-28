import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import FlashCardPage from './components/FlashCardPage';

const RoutesContainer = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/flashcard/:topic' element={<FlashCardPage />} />
            </Routes>
        </div>
    )
}

export default RoutesContainer