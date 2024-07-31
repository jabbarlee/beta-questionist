'use client';

import * as React from 'react';
import styles from './index.module.css';
import Accordion from '../Accordion';

export default function index() {
    
  return (
    <div className={styles.configSide}>
        <Accordion 
          title="Settings" 
          metaText="Configure settings for the application"
          chips={['test', 'test2', 'test3']}
        />
    </div>
  );
}
