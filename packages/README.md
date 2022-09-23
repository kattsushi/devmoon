# Packages

Many packages can be shared across apps. Packages can be things like `ui | lib | shared | static | common | config`, but the main purpose is for reusability.

# Add Package

1. create new folder in `./packages` _(i.e. `ui`)_
2. go to `ui` folder and create a `package.json` with proper namespace

```json
{
	"name": "@devmoon/ui",
	"version": "0.2.0",
	"type": "module",
	"main": "index.js"
}
```

3. add the `package` to the `app` you need it in using the `pnpm --filter` + `pnpm add` command

```
pnpm --filter @packages/site add @devmoon/ui
```

> alternatively you can `cd` into the app and use the `pnpm add` command by itself

```
cd apps/site
pnpm add @devmoon/ui
```

4. pnpm adds the workspace at the bottom of your `docs/package.json`

```json
"dependencies": {
  "@devmoon/ui": "workspace:^0.2.0"
}
```

# Using Packages

Using the package is dependent on the type of package it is.

## @devmoon/ui

todo...
