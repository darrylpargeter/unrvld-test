export function sortArray(data, key, direction) {
  if (!Array.isArray(data)) throw new Error('sortArray: data is not an Array');

  let newOrder = data.sort((a, b) => {
    a = a?.[key];
    b = b?.[key];

    return a > b ? -1 : b > a ? 1 : 0;
  });

  if (!direction) {
    newOrder.reverse();
  }

  return newOrder;
}
