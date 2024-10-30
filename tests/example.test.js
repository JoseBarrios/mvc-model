const Example = require('../src/Example');

describe('Example', () => {
  let example;

  beforeEach(() => {
    example = new Example();
  });

  test('should return true', () => {
    expect(example.test()).toBe(true);
  });
});
