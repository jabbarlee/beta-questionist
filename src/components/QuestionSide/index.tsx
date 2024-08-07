"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import ResponseWrapper from '../ResponseWrapper'
import AnswerWrapper from '../AnswerWrapper'
import { generateAnswer } from '@/actions/openaiActions'

function Index({
  generatedAnswer,
} : {
  generatedAnswer: string,
}) {
  const [showAnswerCard, setShowAnswerCard] = useState(false)
  const [answer, setAnswer] = useState('')

  const handleShowAnswer = async () => {
    setShowAnswerCard(true);

    const answer = await generateAnswer(generatedAnswer) as string;
    setAnswer(answer);
  }

  const handleBackButton = () => {
    setShowAnswerCard(false);
    setAnswer('');
  }
  return (
    <div className={styles.questionSide}>
      <div className={`${styles.card} ${showAnswerCard ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          {generatedAnswer && (
            <ResponseWrapper 
              response={generatedAnswer} 
              showAnswer={() => handleShowAnswer()}
            />
          )}
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <AnswerWrapper goBack={() => handleBackButton()}>
            <p>{answer}</p>
          </AnswerWrapper>
        </div>
      </div>
    </div>
  )
}

export default Index
