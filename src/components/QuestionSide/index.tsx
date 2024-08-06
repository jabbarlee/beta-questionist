import React from 'react'
import styles from './index.module.css'
import ResponseWrapper from '../ResponseWrapper'

function index({
  generatedAnswer,
} : {
  generatedAnswer: string,
}) {
  return (
    <div className={styles.questionSide}>
      <div className={styles.container}>
        { generatedAnswer && <ResponseWrapper response={generatedAnswer} /> }
      </div>
    </div>
  )
}

export default index
