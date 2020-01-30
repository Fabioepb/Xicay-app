export const addNewFact = fact => ({
  type: "FETCH_FACT",
  fact
});

export const deleteFact = fact => ({
  type: "DELETE_FACT",
  fact
});

export const selectFact = fact => ({
  type: "SELECT_FACT",
  fact
});

export const clearFactList = () => ({
  type: "CLEAR_FACTS"
});
