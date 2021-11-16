import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieSeriesCard from "../components/MovieSeriesCard";
import { getCollections } from "../store/actions/collectionActions";

const Movies = () => {
  const dispatch = useDispatch();

  const series_list = useSelector((state) => state.collection.collections);

  useEffect(() => {
    dispatch(getCollections("movie"));

    return () => {
      dispatch({
        type: "SET_COLLECTIONS",
        payload: [],
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {series_list.map((series) => (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4"
            style={{ height: "100%" }}
          >
            <MovieSeriesCard
              image={series.images["Poster Art"].url}
              title={series.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
