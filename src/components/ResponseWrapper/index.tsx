import React from 'react'
import styles from './index.module.css'
import { marked } from 'marked'
import { Button } from '@mui/material';

function index({
    response,
    showAnswer
} : {
    response: string,
    showAnswer: (response: string) => void
}) {
  const formattedResponse = marked(response);

  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: formattedResponse }} />
      <Button variant='text' color='success' onClick={() => showAnswer(response)}>Show answer</Button>
    </div>
  )
}

export default index
