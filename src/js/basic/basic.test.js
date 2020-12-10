import sum from './basic';

test('basic 5 values', () => {
  const result = sum([1, 2, 5, 6]);

  expect(result).toBe(14);
});

test('basic empty array', () => {
  const result = sum([]);

  expect(result).toBe(0);
});
