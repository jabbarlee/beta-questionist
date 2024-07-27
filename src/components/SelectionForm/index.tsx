'use client'

import React, { useState } from 'react'
import Selector from '@/components/Selector'
import { subOptionsMapping } from '@/lib/data/subOptionsMapping'
import { useHandleSelect } from '@/actions/formActions'

function Index() {
  const { selectedValues, handleSelect } = useHandleSelect()

  return (
    <div>
      <Selector
        options={[
          { value: 'no_calculator', label: 'No Calculator' },
          { value: 'calculator', label: 'Calculator' },
        ]}
        title='Test'
        onSelect={handleSelect('test')}
      />
      <Selector
        options={[
          { value: 'easy', label: 'Easy' },
          { value: 'medium', label: 'Medium' },
          { value: 'hard', label: 'Hard' }
        ]}
        title='Level'
        onSelect={handleSelect('level')}
      />
      <Selector
        options={[
          { value: 'multiple-choice', label: 'Multiple choice' },
          { value: 'grid-in', label: 'Grid-in' }
        ]}
        title='Question Type'
        onSelect={handleSelect('questionType')}
      /> 
      <Selector
        options={[
          { value: 'algebra', label: 'Algebra' },
          { value: 'geometry&trigonometry', label: 'Geometry' },
          { value: 'advanced-math', label: 'Advanced Math' },
          { value: 'problem-solving&data-analysis', label: 'Problem Solving and Data Analysis' },
          { value: 'additional-topics', label: 'Additional Topics' }
        ]}
        title='Content Area'
        onSelect={handleSelect('contentArea')} 
      />
      {selectedValues.contentArea && subOptionsMapping[selectedValues.contentArea] && (
        <Selector
          options={subOptionsMapping[selectedValues.contentArea]}
          title={'Topics'}
          onSelect={handleSelect('subContentArea')}
        />
      )}
      <p>
        Selected values: {JSON.stringify(selectedValues)}
      </p>
    </div>
  )
}

export default Index
