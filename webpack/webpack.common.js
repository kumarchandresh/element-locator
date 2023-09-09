const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const srcDir = path.join(__dirname, "..", "src");
const outDir = path.join(__dirname, "..", "out");

module.exports = {
	entry: {
		worker: path.join(srcDir, "worker.ts"),
		content: path.join(srcDir, "content.ts")
	},
	output: {
		path: outDir,
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
  resolve: {
    extensions: ['.ts', '.js'],
  },
	plugins: [
		new CopyPlugin({
			patterns: [{ from: "public", to: "." }],
		}),
	],
};
