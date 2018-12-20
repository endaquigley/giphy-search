export const updateQuery = query => {
  return {
    type: "UPDATE_QUERY",
    query: query
  };
};

export const updateData = data => {
  return {
    type: "UPDATE_DATA",
    data: data
  };
};

export const updateSelected = selected => {
  return {
    type: "UPDATE_SELECTED",
    selected: selected
  };
};

export const nextPage = () => {
  return {
    type: "NEXT_PAGE"
  };
};

export const prevPage = () => {
  return {
    type: "PREV_PAGE"
  };
};
