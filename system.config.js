System.config({
	transpiler: 'typescript',
    map: {
		app: "./bin"
	},
	packages: {
		app: {
			main: './main',
			defaultExtension: 'js'
		}
	}
});