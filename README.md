# ts-node-stack-problem

This repository is a minimal show-case to demonstrate wrong stack traces when using ts-node to run protrator tests.

Install & run with `npm install && npm start`. The stack trace of the error thrown in ./example.spec.ts is wrong. In fact, each command preceding the `new Error()` on the same line is counted as an additional line.
