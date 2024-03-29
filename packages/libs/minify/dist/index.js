import { minify as e } from 'terser'
import t from 'fs'
import i from 'path'
import o from 'argv-to-object'
import a from 'rfdc'
async function p(e) {
	const o = e.hasOwnProperty('dirs') ? e.dirs.split(',') : []
	return (
		e.hasOwnProperty('files')
			? Array.isArray(e.files) ||
			  ((e.files = e.files.split(',')),
			  (e.files = e.files.map(t => i.join(`${e.root}/fromRoot`, t))))
			: (e.files = []),
		o.forEach(i => {
			t.readdirSync(i).forEach(o => {
				t.statSync(`${i}/${o}`).isDirectory()
					? ((e.dirs = `${i}/${o}`), p(e))
					: e.files.push(`${e.root}/${i}/${o}`)
			})
		}),
		e.files.filter(e => e.match(/\.js$/))
	)
}
let r = o({
	help: { keypath: 'help', type: 'boolean', alias: 'h', description: 'Print usage information' },
	version: { keypath: 'version', type: 'boolean', alias: 'V', description: 'Print version number' },
	files: { keypath: 'files', alias: 'f', description: 'Files to minify' },
	dirs: { keypath: 'dirs', alias: 'd', description: 'Directories to minify' },
	root: {
		keypath: 'root',
		alias: 'r',
		default: `${process.cwd()}`,
		description: 'Root directory to reference files from'
	},
	parse: { keypath: 'parse', alias: 'p', description: 'Specify the parse option' },
	clean: { keypath: 'clean', type: 'boolean', default: !0, description: 'Clean output directory' },
	compress: { keypath: 'compress', alias: 'c', description: 'Specify the compress option' },
	mangle: {
		keypath: 'mangle',
		type: 'boolean',
		default: !0,
		alias: 'm',
		description: 'Specify the mangle option'
	},
	'mangle-props': {
		keypath: 'mangle-props',
		alias: 'M',
		description: 'Specify the mangle-props option'
	},
	format: { keypath: 'format', description: 'Specify the format option' },
	output: {
		keypath: 'output',
		alias: 'o',
		default: 'dist',
		description: 'Specify the output location'
	},
	comments: { keypath: 'comments', alias: 'C', description: 'Specify the comments option' },
	'config-file': { keypath: 'config-file', description: 'Specify the config file' },
	define: { keypath: 'define', description: 'Specify the global definitions' },
	ecma: { keypath: 'ecma', type: 'integer', default: 5, description: 'Specify the ecma version' },
	enclose: { keypath: 'enclose', alias: 'e', description: 'Embed output in a function' },
	ie8: { keypath: 'ie8', type: 'boolean', default: !1, description: 'Support IE8' },
	'keep-classnames': {
		keypath: 'keep_classnames',
		type: 'boolean',
		default: !1,
		description: 'Keep classnames'
	},
	'keep-fnames': {
		keypath: 'keep_fnames',
		type: 'boolean',
		default: !1,
		description: 'Keep function names'
	},
	module: {
		keypath: 'module',
		type: 'boolean',
		default: !1,
		description: 'Specify the module as es6 input'
	},
	'name-cache': {
		keypath: 'nameCache',
		description: 'Specify the name cache for holding mangled names'
	},
	safari10: { keypath: 'safari10', type: 'boolean', default: !1, description: 'Support Safari 10' },
	sourcemap: { keypath: 'sourcemap', description: 'Specify the sourcemap option' },
	timings: { keypath: 'timings', description: 'Print timings' },
	toplevel: {
		keypath: 'toplevel',
		type: 'boolean',
		default: !1,
		description: 'Compress and/or mangle the top-level scope'
	},
	wrap: { keypath: 'wrap', description: 'Wrap the output in a function' }
})
!(async function () {
	let o = await p(r)
	await (async function (o) {
		t.existsSync(r.output) &&
			(t.rmSync(`${r.root}/${r.output}`, { recursive: !0 }, e => {
				if (e) throw e
			}),
			console.log(`Removed ${r.output}`))
		for (const p of o)
			try {
				console.log(`Minifying ${p}`)
				const o = a()(r)
				let s = p.replace(/src|fromRoot/, r.output)
				;['dirs', 'files', 'root', 'output', 'clean'].forEach(e => delete o[e])
				let n = (await e(t.readFileSync(p.replace(/fromRoot\//, ''), 'utf8'), o)).code || ''
				n &&
					(t.existsSync(i.dirname(s)) ||
						(console.log(`Creating directory ${i.dirname(s)}`),
						t.mkdirSync(i.dirname(s), { recursive: !0 })),
					t.writeFileSync(s, n),
					console.log('Minified file created successfully'))
			} catch (e) {
				console.error('Error minifying file', e.message)
			}
	})(o)
})()
