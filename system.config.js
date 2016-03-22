System.config({
	transpiler: 'typescript',
    map: {
		app: "./app"
	},
	packages: {
		app: {
			main: './main',
			defaultExtension: 'js'
		}
	}
});