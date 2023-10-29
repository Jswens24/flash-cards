import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sqlData, nodeData, javascriptData } from '../assets/data.js';
import Card from './Card.jsx';

const FlashCardPage = () => {
    const { topic } = useParams();


    return (
        <div>
            {topic === 'sqlData' ? sqlData.map(question => <Card question={question.question} answer={question.answer} key={question.questionId} />) : ''}
            {topic === 'nodeData' ? nodeData.map(question => <Card question={question.question} answer={question.answer} key={question.questionId} />) : ''}
            {topic === 'javascriptData' ? javascriptData.map(question => <Card question={question.question} answer={question.answer} key={question.questionId} />) : ''}
        </div>
    )
}

export default FlashCardPage