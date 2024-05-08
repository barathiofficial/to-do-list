module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'windows'],
		quotes: ['off', 'single'],
		semi: ['error', 'never'],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
				fixStyle: 'separate-type-imports'
			}
		],
		'react/no-unescaped-entities': 'error',
		'no-console': 'error',
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: 'block' },
			{ blankLine: 'always', prev: 'block', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' }
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: false,
				multiline: 'last',
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true,
				locale: 'auto'
			}
		],
		'no-empty': 'off',
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true
			}
		],
		'no-restricted-syntax': [
			'error',
			{
				selector: `
                ArrowFunctionExpression
                :not(CallExpression > ArrowFunctionExpression)
                :not(Property > ArrowFunctionExpression)
                :not(JSXExpressionContainer > ArrowFunctionExpression)
                :not(CallExpression[callee.object.name='Promise'] > ArrowFunctionExpression)
              `,
				message: `
                Arrow functions are not allowed except in callbacks, object properties, JSX properties, and as Promise callbacks.
              `
			}
		]
	}
}
