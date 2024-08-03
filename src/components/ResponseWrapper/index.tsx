import React from 'react'
import styles from './index.module.css'
import { marked } from 'marked'

function index({
    response
} : {
    response: string
}) {
  const formattedResponse = marked(response);

  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: formattedResponse }} />
    </div>
  )
}

export default index
