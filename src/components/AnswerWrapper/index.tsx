import { Button } from '@mui/material'
import React from 'react'
import styles from './index.module.css'

function index({
    children,
    goBack
} : {
    children: React.ReactNode,
    goBack: () => void
}) {
  return (
    <div className={styles.container}>
      {children}
      <Button variant='text' onClick={() => goBack()}>Back</Button>
    </div>
  )
}

export default index
