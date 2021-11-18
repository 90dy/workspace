module.exports = {
	root: true,
	env: {
		browser: true,
		amd: true,
		node: true,
		es2021: true,
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:security/recommended',

		'plugin:import/recommended',
		'plugin:import/typescript',

		'plugin:react/recommended',
		'plugin:flowtype/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:json/recommended',

		'plugin:prettier/recommended',
	],
	plugins: [
		'security',
		'import',
		'react',
		'flowtype',
		'@typescript-eslint',
		'json',
		'prettier',
	],

	overrides: [
		{
			files: ['*.{ts,tsx}'],
			parser: '@typescript-eslint/parser',
			rules: {
				'flowtype/no-types-missing-file-annotation': 'off',
			},
		},
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
	ignorePatterns: ['.*.js'],
}
