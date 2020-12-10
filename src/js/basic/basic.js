function arraySumm(items) {
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + item);
}

export default function sum(items) {
  return arraySumm(items);
}
