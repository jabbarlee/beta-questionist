export const accordions = [
    { 
        id: 'response_type', 
        title: 'Response type', 
        metaText: `Select one or more options to define the format of the questions you want to generate. If you want the questions to be randomly generated from both types, you can select both options.`, 
        chips: ['Multiple Choice', 'Grid-in'] 
    },
    {
        id: 'calculator_usage', 
        title: 'Calculator usage', 
        metaText: `Select one or both options to specify the calculator policy for the questions you want to generate. If you want the questions to be randomly generated with mixed calculator policies, you can select both options.`, 
        chips: ['Calculator', 'No Calculator']
    },
    {
        id: 'content_area',
        title: 'Choose Content Area',
        metaText: `Select the content areas you want to include in the questions. You can choose multiple content areas to cover a wide range of topics.`,
        chips: [
            'Algebra', 
            'Advanced Math', 
            'Problem Solving and Data Analysis', 
            'Geometry and Trigonometry', 
            'Additional Topics'
        ]
    }
];

export const units: { [key: string]: string[] } = {
    'Algebra': [
      'Linear Equations and Inequalities',
      'Systems of Equations',
      'Quadratics',
      'Polynomials'
    ],
    'Advanced Math': [
      'Functions',
      'Rational Expressions',
      'Manipulating Polynomials'
    ],
    'Problem Solving and Data Analysis': [
      'Ratios, Proportions, and Percentages',
      'Data Interpretation',
      'Statistics',
      'Probability'
    ],
    'Geometry and Trigonometry': [
      'Angles, Circles, and Triangles',
      'Volume and Surface Area',
      'Trigonometric Functions',
      'Coordinate Geometry',
      'Transformations'
    ],
    'Additional Topics': [
      'Complex Numbers',
      'Vectors',
      'Matrices'
    ]
  };
  