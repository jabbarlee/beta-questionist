"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import Response from '../Response'
import AnswerWrapper from '../AnswerWrapper'

function Index({
  question,
  answer
} : {
  question: string,
  answer: string
}) {
  const [showAnswerCard, setShowAnswerCard] = useState(false)

  return (
    <div className={styles.questionSide}>
      <div className={`${styles.card} ${showAnswerCard ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          {question && (
            <Response 
              response={question}
              onClick={() => setShowAnswerCard(true)}
            />
          )}
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <AnswerWrapper goBack={() => setShowAnswerCard(false)}>
            <p>{answer}</p>
          </AnswerWrapper>
        </div>
      </div>
    </div>
  )
}

export default Index
