
import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'SpotifyWrapper',
  },
  devtool: 'source-map',
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ [ 'es2015', { modules: false } ] ]
				}
			}
		]
	}
}