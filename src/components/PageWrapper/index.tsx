import React from 'react'
import styles from './index.module.css'
import ConfigSide from '@/components/ConfigSide'
import QuestionSide from '@/components/QuestionSide'

function index() {
  return (
    <div className={styles.container}>
      <ConfigSide />
      <QuestionSide />
    </div>
  )
}

export default index
