describe('Example', function () {
    it('to show wrong error stack', function () {
        console.log('This counts as line 3');
        console.log('This counts as line 4');
        throw new Error('Stack trace should point to example.spec.ts:3:86 rather than :5:15');
    });
});
//# sourceMappingURL=example.spec.js.map