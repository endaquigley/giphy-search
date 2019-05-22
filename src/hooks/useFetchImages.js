import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateData } from "../actions";

export const useFetchImages = () => {
  const dispatch = useDispatch();
  const { page, query } = useSelector(state => state);

  const fetchImages = useCallback(async () => {
    const {
      REACT_APP_GIPHY_API_KEY: key,
      REACT_APP_GIPHY_API_ENDPOINT: endpoint
    } = process.env;

    const url = `${endpoint}?api_key=${key}&q=${query}&offset=${page * 25}`;

    const response = await fetch(url);
    const { data } = await response.json();

    dispatch(updateData(data));
  }, [query, page, dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);
};
