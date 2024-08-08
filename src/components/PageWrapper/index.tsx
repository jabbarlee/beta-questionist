"use client";

import React, { useState } from 'react';
import styles from './index.module.css';
import ConfigSide from '@/components/ConfigSide';
import QuestionSide from '@/components/QuestionSide';
import { generateQuestion } from '@/actions/generateQuestion';
import { generateAnswer } from '@/actions/openaiActions';

const IndexPage = () => {
  const [generatedQuestion, setGeneratedQuestion] = useState<string>('');
  const [generatedAnswer, setGeneratedAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async (selectedChipsState: { [key: string]: string[] }, filteredUnits: string[]) => {
    setLoading(true); // Start loading
    try {
      const question = await generateQuestion(selectedChipsState, filteredUnits) as string;
      const answer = await generateAnswer(question) as string;

      setGeneratedQuestion(question);
      setGeneratedAnswer(answer);
    } catch (error) {
      console.error('Error generating question/answer:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className={styles.container}>
      <ConfigSide onSubmit={handleGenerate} />
      <QuestionSide 
        question={generatedQuestion} 
        answer={generatedAnswer} 
        loading={loading}
      />
    </div>
  );
};

export default IndexPage;
