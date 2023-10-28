import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sqlData, nodeData } from '../assets/data.js';
import Card from './Card.jsx';

const FlashCardPage = () => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const { topic } = useParams();



    console.log(sqlData);

    return (
        <div>
            <Card data={topic} />
        </div>
    )
}

export default FlashCardPage