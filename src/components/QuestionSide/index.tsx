"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import Response from '../Response'
import AnswerWrapper from '../AnswerWrapper'
import { CircularProgress, Typography } from '@mui/material'

function Index({
  question,
  answer,
  loading,
}: {
  question: string;
  answer: string;
  loading: boolean;
}) {
  const [showAnswerCard, setShowAnswerCard] = useState(false)

  return (
    <div className={styles.questionSide}>
      <div className={`${styles.card} ${showAnswerCard ? styles.flipped : ''}`}>
        <div className={styles.cardFace}>
          {loading ? (
            <div className={styles.loadingWrapper}>
              <Typography variant="h5">Generating question...</Typography>
              <CircularProgress color="inherit" />
            </div>
          ) : (
            question && <Response 
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
