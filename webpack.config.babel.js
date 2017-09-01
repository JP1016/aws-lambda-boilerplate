import path from 'path';
import fs from 'fs';
import webpack from 'webpack';

const searchDir = path.join(__dirname, 'lib', 'functions');

export default {
	context: __dirname,
	entry: fs.readdirSync(searchDir)
		.filter(filename => /\.js$/.test(filename))
		.map(filename => {
			var entry = {};
			entry[filename.replace('.js', '')] = path.join(searchDir, filename);
			return entry;
		})
		.reduce((obj, entry) => Object.assign(obj, entry), {}),
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {presets: ['es2015', 'stage-0']}
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin()
	],
	output: {
		path: path.join(__dirname, 'dist'),
		library: '[name]',
		libraryTarget: 'commonjs2',
		filename: '[name].js'
	},
	target: 'node'
};
