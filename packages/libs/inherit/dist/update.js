import fs from 'fs'
import os from 'os'
import { detectNewline } from 'detect-newline'
import { generateInheritedPackageJson } from './generatePackageJson.js'
import { exec } from 'child_process'
export async function update(e) {
	const o = await generateInheritedPackageJson(e)
	if (o.modifiedPackages.length > 0) {
		for (const e of o.modifiedPackages) {
			const t = o.allPackages[e],
				{ packageJsonPath: a, ...n } = t,
				s = detectNewline(fs.readFileSync(t.packageJsonPath, 'utf-8')) || os.EOL
			fs.writeFileSync(t.packageJsonPath, JSON.stringify(n, null, 2).replace(/\n/g, s) + s),
				exec(`pnpm --filter=${e} install`)
		}
		let e = [...new Set(o.modifiedPackages)]
		console.log(`Updated these packages: ${e.join(', ')}`)
	} else console.log('Nothing needs to be updated.')
}
