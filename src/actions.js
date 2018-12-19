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

export const fetchImages = () => {
  return async (dispatch, getState) => {
    const { query, page } = getState();

    const key = process.env.REACT_APP_GIFFY_API_KEY;
    const endpoint = "https://api.giphy.com/v1/gifs/search";
    const url = `${endpoint}?api_key=${key}&q=${query}&offset=${page * 25}`;

    const response = await fetch(url);
    const { data } = await response.json();

    dispatch(updateData(data));
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
