"use client"

import React, { useState } from 'react';
import styles from './index.module.css';
import ConfigSide from '@/components/ConfigSide';
import QuestionSide from '@/components/QuestionSide';
import { generateQuestion } from '@/actions/generateQuestion';

const IndexPage = () => {
  const [generatedAnswer, setGeneratedAnswer] = useState<string>('');

  const handleGenerate = async (selectedChipsState: { [key: string]: string[] }, filteredUnits: string[]) => {
    // const answer = await generateQuestion(selectedChipsState, filteredUnits) as string;
    setGeneratedAnswer(`Answer generated: If 3x + 5 = 20, what is the value of x?

A) 3
B) 5
C) 10
D) 15`);
  };

  return (
    <div className={styles.container}>
      <ConfigSide onSubmit={handleGenerate}/>
      <QuestionSide generatedAnswer={generatedAnswer}/>
    </div>
  );
};

export default IndexPage;
