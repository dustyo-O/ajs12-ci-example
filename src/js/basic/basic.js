function arraySumm(items) {
  if (!items.length) return 0;
  return items.reduce((s, item) => s + item);
}

export default function sum(items) {
  return arraySumm(items);
}
