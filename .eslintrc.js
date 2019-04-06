/* eslint-disable node/no-unpublished-require */
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true,
			experimentalObjectRestSpread: true
		}
	},
	plugins: [
		'ember'
	],
	extends: [
		'eslint:recommended',
		'plugin:ember-suave/recommended',
		// 'plugin:ember-best-practices/recommended',
		'plugin:ember/recommended'
	],
	env: {
		browser: true
	},
	rules: {
		'indent': [
			'error',
			'tab', {
				'SwitchCase': 1
			}
		],
		'brace-style': [
			'error',
			'1tbs', {
				'allowSingleLine': true
			}
		],
		'max-statements-per-line': [
			'error', {
				'max': 2
			}
		],
		'no-case-declarations': 'off',
		'ember-suave/prefer-destructuring': [
			'error', {
				'array': false,
				'object': false
			}
		],
		'arrow-parens': [
			2,
			'as-needed', {
				'requireForBlockBody': true
			}
		],
		'arrow-spacing': [
			'error', {
				'before': true,
				'after': true
			}
		],
		'eqeqeq': 'error',
		'comma-dangle': [
			'error', 'never'
		],
		'no-console': 'off',
		'no-constant-condition': 'off',
		'no-useless-escape': 'off',
		'ember/named-functions-in-promises': 'off',
		'ember/use-ember-get-and-set': 'error',
		'ember/no-empty-attrs': 'error',
		'ember/order-in-models': 'off',
		'ember/order-in-routes': 'off',
		'ember/order-in-controllers': 'off',
		'ember/order-in-components': 'off',
		'ember/no-observers': 'off',
		'ember/alias-model-in-controller': 'off',
		'ember/no-old-shims': 'error',
		'ember/avoid-leaking-state-in-components': 'off',
		'ember/avoid-leaking-state-in-ember-objects': 'off'
	},
	overrides: [
		// node files
		{
			files: [
				'.ember-cli.js',
				'.eslintrc.js',
				'.template-lintrc.js',
				'ember-cli-build.js',
				'testem.js',
				'blueprints/*/index.js',
				'config/**/*.js',
				'lib/*/index.js'
			],
			excludedFiles: [
				'app/**'
			],
			parserOptions: {
				sourceType: 'script',
				ecmaVersion: 2015
			},
			env: {
				browser: false,
				node: true
			},
			plugins: ['node'],
			rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
				// add your custom rules and overrides for node files here
			})
		}
	]
};
