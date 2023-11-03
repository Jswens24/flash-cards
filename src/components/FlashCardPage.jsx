import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sqlData, nodeData, javascriptData, globalStateReactData, gitGithubData, cssData, reactData } from '../assets/data.js';
import Card from './Card.jsx';

const FlashCardPage = () => {
    const { topic } = useParams();


    return (
        <div className='flex absolute justify-center flex-col items-center h-full w-full'>
            {topic === 'sqlData' ? <Card data={sqlData} /> : ''}
            {topic === 'nodeData' ? <Card data={nodeData} /> : ''}
            {topic === 'javascriptData' ? <Card data={javascriptData} /> : ''}
            {topic === 'globalStateReactData' ? <Card data={globalStateReactData} /> : ''}
            {topic === 'gitGithubData' ? <Card data={gitGithubData} /> : ''}
            {topic === 'cssData' ? <Card data={cssData} /> : ''}
            {topic === 'reactData' ? <Card data={reactData} /> : ''}
        </div>
    )
}

export default FlashCardPage