import { generateInheritedPackageJson } from './generatePackageJson.js'
export async function check(e) {
	const n = generateInheritedPackageJson(e)
	if (n.modifiedPackages.length > 0) {
		const e = options.recovery || 'inherit update'
		console.error(
			`The inheritance of package.json is in an inconsistent state. These packages\n            are inconsistent: ${n.modifiedPackages.join(
				', '
			)} Please run the following command:\n            > ${e}`
		),
			process.exit(1)
	}
}
