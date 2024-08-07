"use client"

import React, { useState } from 'react';
import styles from './index.module.css';
import ConfigSide from '@/components/ConfigSide';
import QuestionSide from '@/components/QuestionSide';
import { generateQuestion } from '@/actions/generateQuestion';
import { generateAnswer } from '@/actions/openaiActions';

const IndexPage = () => {
  const [generatedQuestion, setGeneratedQuestion] = useState<string>('');
  const [generatedAnswer, setGeneratedAnswer] = useState<string>('');
  
  const handleGenerate = async (selectedChipsState: { [key: string]: string[] }, filteredUnits: string[]) => {
    const question = await generateQuestion(selectedChipsState, filteredUnits) as string;
    const answer = await generateAnswer(question) as string;

    setGeneratedQuestion(question);
    setGeneratedAnswer(answer);
  };

  return (
    <div className={styles.container}>
      <ConfigSide onSubmit={handleGenerate}/>
      <QuestionSide question={generatedQuestion} answer={generatedAnswer}/>
    </div>
  );
};

export default IndexPage;
