import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import localResolve from "rollup-plugin-local-resolve";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

import pkg from "./package.json";

const globals = {
    "lodash-es": "lodash-es",
    "rename-keys": "index",
    classnames: "classnames",
};

const config = {
    input: "src/index.js",
    output: [
        {
            file: pkg.browser,
            format: "umd",
            name: "BlockUtils",
            globals
        },
        {
            file: "dist/wp-block-utils.js",
            format: "umd",
            name: "BlockUtils",
            globals
        },
        {
            file: pkg.main,
            format: "cjs",
            name: "BlockUtils"
        },
        {
            file: pkg.module,
            format: "es"
        }
    ],
    plugins: [
        nodeResolve({
            mainFields: ["module"],
            extensions: [".js", ".jsx"]
        }),
        babel({ babelHelpers: 'bundled' }),
        localResolve(),
        commonjs(),
        filesize(),
        terser(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    external: Object.keys(pkg.dependencies)
};

export default config;