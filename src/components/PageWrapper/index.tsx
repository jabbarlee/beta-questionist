"use client"

import React from 'react'
import styles from './index.module.css'
import ConfigSide from '@/components/ConfigSide'
import QuestionSide from '@/components/QuestionSide'

function index() {

  const handleGenerate = (selectedChipsState: { [key: string]: string[] }) => {
    console.log('generate', JSON.stringify(selectedChipsState))

  }

  return (
    <div className={styles.container}>
      <ConfigSide onSubmit={handleGenerate}/>
      <QuestionSide />
    </div>
  )
}

export default index
