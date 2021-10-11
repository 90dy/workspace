module.exports = {
	extends: [
		// Bugs
		'plugin:sonarjs/recommended',
		'plugin:regexp/recommended',
		// Security
		'plugin:security/recommended',
		'plugin:prettier/recommended'
	],
	plugins: [
		"sonarjs",
		'security',
		'regexp',
		'prettier'
	],
}
