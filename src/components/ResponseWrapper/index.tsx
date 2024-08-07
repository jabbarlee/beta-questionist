import React from 'react'
import styles from './index.module.css'
import { marked } from 'marked'
import { Button } from '@mui/material';

function index({
    response,
    onClick
} : {
    response: string,
    onClick: (response: string) => void
}) {
  const formattedResponse = marked(response);

  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: formattedResponse }} />
      <Button variant='text' color='success' onClick={() => onClick(response)}>Show answer</Button>
    </div>
  )
}

export default index
