"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import ConfigSide from '@/components/ConfigSide'
import QuestionSide from '@/components/QuestionSide'
import { generatePrompt } from '@/actions/openaiActions'

function index() {
  const [generatedAnswer, setGeneratedAnswer] = useState<string>('');

  const handleGenerate = (selectedChipsState: { [key: string]: string[] }) => {
    console.log('generate', JSON.stringify(selectedChipsState))
    const promptText = `
      Generate an SAT question based on the following information: ${JSON.stringify(selectedChipsState)}. Only include the question without the answer.
    `
    generatePrompt(promptText)
      .then((answer) => {
        setGeneratedAnswer(answer as string);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div className={styles.container}>
      <ConfigSide onSubmit={handleGenerate}/>
      <QuestionSide generatedAnswer={generatedAnswer}/>
    </div>
  )
}

export default index
