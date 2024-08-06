"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import ResponseWrapper from '../ResponseWrapper'
import AnswerWrapper from '../AnswerWrapper'

function Index({
  generatedAnswer,
} : {
  generatedAnswer: string,
}) {
  const [showAnswerCard, setShowAnswerCard] = useState(false)

  
  return (
    <div className={styles.questionSide}>
      <div className={`${styles.card} ${showAnswerCard ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          {generatedAnswer && (
            <ResponseWrapper 
              response={generatedAnswer} 
              showAnswer={() => setShowAnswerCard(true)}
            />
          )}
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <AnswerWrapper goBack={() => setShowAnswerCard(false)}>
            <p>sdfhkjdfh</p>
          </AnswerWrapper>
        </div>
      </div>
    </div>
  )
}

export default Index
