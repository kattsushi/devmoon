import argv from 'argv-to-object'
import path from 'path'
import { update } from './update.js'
import { check } from './check.js'
let options = argv({
		update: {
			keypath: 'update',
			type: 'boolean',
			alias: 'u',
			description: 'Update the package.json file with the latest inheritance'
		},
		check: {
			keypath: 'check',
			type: 'boolean',
			alias: 'c',
			description: 'Check for differences in the package.json file'
		},
		root: {
			keypath: 'root',
			alias: 'r',
			default: `${process.cwd()}`,
			description: 'Root directory to reference files from'
		},
		recovery: {
			keypath: 'recovery',
			description: 'Custom recovery command to show developers when the check has failed'
		}
	}),
	command = options.hasOwnProperty('update')
		? 'update'
		: options.hasOwnProperty('check')
		? 'check'
		: '',
	root = path.resolve(options.root)
!(async function () {
	switch (command) {
		case 'update':
			await update(root)
			break
		case 'check':
			await check(root, options)
			break
		default:
			console.log(
				'\n                Usage: inherit -u | -c\n                This utility will update package.json in a monorepo to inherit from another package.json template.\n                Currently, only "scripts", "devDependencies", and "dependencies" are merged into the package.json\n                Commands:\n                -u | --update      updates the package.json for all packages in a monorepo to match inheritance\n                -c | --check       checks all the package.json inheritance are consistent\n                -r | --root        root directory to reference files from\n                Options:\n                --recovery  custom recovery command to show developers when the check has failed\n            '
			)
	}
})()
