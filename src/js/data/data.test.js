import calculateCashback from './data'

test('cashback amount 1000000', () => {
  const result = calculateCashback(1000000);

  expect(result).toBe(50000);
});

// test('cashback amount 100000', () => {
//   const result = calculateCashback(100000);

//   expect(result).toBe(5000);
// });

test('cashback amount 50000', () => {
  const result = calculateCashback(50000);

  expect(result).toBe(1000);
});

// test('cashback amount 10000', () => {
//   const result = calculateCashback(10000);

//   expect(result).toBe(200);
// });

test('cashback amount 5000', () => {
  const result = calculateCashback(5000);

  expect(result).toBe(50);
});

// test('cashback amount 1000', () => {
//   const result = calculateCashback(1000);

//   expect(result).toBe(10);
// });

test('cashback amount 100', () => {
  const result = calculateCashback(100);

  expect(result).toBe(0);
});
