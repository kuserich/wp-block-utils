import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

const config = {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/index.js',
			format: 'es',
		},
	],
	plugins: [
		nodeResolve( {
			mainFields: [ 'module' ],
			extensions: [ '.js', '.jsx' ],
		} ),
		babel( { babelHelpers: 'bundled' } ),
		filesize(),
		terser(),
		replace( {
			'process.env.NODE_ENV': JSON.stringify( 'production' ),
		} ),
	],
	external: Object.keys( pkg.dependencies ),
};

export default config;
