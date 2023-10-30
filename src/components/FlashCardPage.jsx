import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sqlData, nodeData, javascriptData, globalStateReactData } from '../assets/data.js';
import Card from './Card.jsx';

const FlashCardPage = () => {
    const { topic } = useParams();


    return (
        <div>
            {topic === 'sqlData' ? <Card data={sqlData} /> : ''}
            {topic === 'nodeData' ? <Card data={nodeData} /> : ''}
            {topic === 'javascriptData' ? <Card data={javascriptData} /> : ''}
            {topic === 'globalStateReactData' ? <Card data={globalStateReactData} /> : ''}
        </div>
    )
}

export default FlashCardPage