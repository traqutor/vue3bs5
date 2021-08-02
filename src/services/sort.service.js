export const sortByIsAcknowledged = (a, b) => {
  if (a.isAcknowledged < b.isAcknowledged) {
    return -1;
  }
  if (a.isAcknowledged > b.isAcknowledged) {
    return 1;
  }
  return 0;
};
