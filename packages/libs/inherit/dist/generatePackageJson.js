import fs from 'fs'
import path from 'path'
import { getPackageInfos } from 'workspace-tools'
import { parse as parsePackageName } from 'parse-package-name'
async function resolveInRepo(e, o, t) {
	const a = parsePackageName(o)
	'.' === a.name && (a.name = e)
	const n = t[a.name]
	if (n) return path.join(path.dirname(n.packageJsonPath), a.path)
}
async function shouldUpdate(e, o) {
	if (!o) return !1
	if (!e) return !0
	let t = !1
	for (const [a, n] of Object.entries(o)) e[a] !== n && (t = !0)
	return t
}
export async function generateInheritedPackageJson(e) {
	const o = getPackageInfos(e),
		t = [],
		a = ['devDependencies', 'dependencies', 'scripts']
	for (const [e, n] of Object.entries(o))
		if (n.inherits) {
			let r = {}
			for (const t of n.inherits) {
				const n = await resolveInRepo(e, t, o)
				if (!n) throw new Error(`${n} does not exist`)
				const s = JSON.parse(fs.readFileSync(n, 'utf8'))
				for (const e of a) r[e] = { ...r[e], ...s[e] }
			}
			for (const o of a)
				(await shouldUpdate(n[o], r[o])) && ((n[o] = { ...n[o], ...r[o] }), t.push(e))
		}
	return { allPackages: o, modifiedPackages: t }
}
