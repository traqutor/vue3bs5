export const sortByIsAcknowledged = (a, b) => {
  return a.isAcknowledged === b.isAcknowledged ? 0 : a.isAcknowledged ? -1 : 1;
};

export const sortByIsWatched = (a, b) => {
  return a.isWatched === b.isWatched ? 0 : a.isWatched ? -1 : 1;
};
