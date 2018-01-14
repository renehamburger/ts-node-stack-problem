describe('Example', () => {
  it('to show wrong error stack', () => {
    console.log('This counts as line 3');console.log('This counts as line 4'); throw new Error('Stack trace should point to example.spec.ts:3:91 rather than :5:15');
  });
});
