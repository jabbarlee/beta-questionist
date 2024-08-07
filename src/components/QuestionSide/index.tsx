"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import ResponseWrapper from '../ResponseWrapper'
import AnswerWrapper from '../AnswerWrapper'
import { generateAnswer } from '@/actions/openaiActions'

function Index({
  question,
  answer
} : {
  question: string,
  answer: string
}) {
  const [showAnswerCard, setShowAnswerCard] = useState(false)


  const handleBackButton = () => {
    setShowAnswerCard(false);
    
  }
  return (
    <div className={styles.questionSide}>
      <div className={`${styles.card} ${showAnswerCard ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          {question && (
            <ResponseWrapper 
              response={question}
              onClick={() => setShowAnswerCard(true)}
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
