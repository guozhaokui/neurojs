//import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const path = require('path')
const fs = require('fs');
//const rollupPluginTypescriptPathMapping = require('rollup-plugin-typescript-path-mapping')
const production = !process.env.ROLLUP_WATCH;



export default { 
    input: './src/framework.js',
    treeshake: false,
	output: {
		file: './build/neurojs.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: false,
        //name:'neurojs',
        //intro:'window.Laya=window.Laya||exports||{};\n',
        //outro:layaexpreplace
        //indent: false
	},
	plugins: [
		resolve(),
		//resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		//production && terser() // minify, but only in production
	]
};