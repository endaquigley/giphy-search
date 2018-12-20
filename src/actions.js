export const updateQuery = query => ({
  type: "UPDATE_QUERY",
  query: query
});

export const updateData = data => ({
  type: "UPDATE_DATA",
  data: data
});

export const updateSelected = selected => ({
  type: "UPDATE_SELECTED",
  selected: selected
});

export const nextPage = () => ({
  type: "NEXT_PAGE"
});

export const prevPage = () => ({
  type: "PREV_PAGE"
});
