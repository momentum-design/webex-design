"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgs = void 0;
const regArgs = /^([^\=]+)\=([^\=]+)$/;
const getArgs = () => {
    const _args = process.argv.slice(2);
    const ret = {};
    _args.forEach((str) => {
        const result = str.match(regArgs);
        if (result && typeof result.length === 'number' && result.length === 3) {
            ret[result[1]] = result[2];
        }
    });
    return ret;
};
exports.getArgs = getArgs;