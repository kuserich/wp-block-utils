import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
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
		localResolve(),
		commonjs(),
		filesize(),
		terser(),
		replace( {
			'process.env.NODE_ENV': JSON.stringify( 'production' ),
		} ),
	],
	external: Object.keys( pkg.dependencies ),
};

export default config;
