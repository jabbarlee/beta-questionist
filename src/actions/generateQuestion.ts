
import { generatePrompt } from './openaiActions';

export const generateQuestion = (selectedChipsState: { [key: string]: string[] }, filteredUnits: string[]) => {

    console.log('generate', JSON.stringify(selectedChipsState))
    const promptText = `
      "Generate an SAT question based on these settings:\n\n1. **Response Type**: #=${ selectedChipsState.response_type }\n2. **Calculator Usage**: #=${ selectedChipsState.calculator_usage }\n3. **Content Area**: #${ selectedChipsState.content_area }. **Specific units**: #${ filteredUnits }\n4. **Level**: #${ selectedChipsState.level }\n\nGuidelines:\n- For 'Multiple Choice', provide four options (A, B, C, D) with one correct answer.\n- For 'Grid-in', provide a numerical answer."
    `
    const generatedAnswer = generatePrompt(promptText)

  return generatedAnswer
}