module.exports = function (plop) {
  // Page generator
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/page/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/page/story.tsx.hbs'
      }
    ]
  });

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/story.tsx.hbs'
      }
    ]
  });
}; 