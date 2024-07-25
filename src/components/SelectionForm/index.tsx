'use client'

import React, { useState } from 'react'
import Selector from '@/components/Selector'

function Index() {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({})

  const handleSelect = (key: string) => (value: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }))
    // Delay logging to ensure the state update is visible
    setTimeout(() => console.log(selectedValues), 0)
  }

  return (
    <div>
      <Selector
        options={{
          option1: 'No Calculator',
          option2: 'Calculator',
        }}
        title='Test'
        onSelect={(value) => handleSelect('test')(value)}
      />
      <Selector
        options={{
          option1: 'Easy',
          option2: 'Medium',
          option3: 'Hard'
        }}
        title='Level'
        onSelect={(value) => handleSelect('level')(value)}
      />
      <p>Test: {selectedValues.test}</p>
      <p>Level: {selectedValues.level}</p>
    </div>
  )
}

export default Index
