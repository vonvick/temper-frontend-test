export const swapListItems = ({ itemsList, index1, index2 }) => {
  const results = [...itemsList];

  results[index1] = itemsList[index2];
  results[index2] = itemsList[index1];

  return results;
};
