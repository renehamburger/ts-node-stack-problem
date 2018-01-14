# ts-node-stack-problem

This repository is a minimal show-case to demonstrate wrong stack traces when using ts-node to run protrator tests.

Install & run with `npm install && npm start`. This will execute the tests `example.spec.ts` and `example.spec.js` (which has already been compiled with tsc with source maps). The stack trace of `example.spec.js` is correct (pointing to `example.spec.ts:3:86`), but the stack  trace of `example.spec.ts` points to `example.spec.js:5:15`. In fact, each command preceding `new Error()` on the same line is counted as an additional line.
