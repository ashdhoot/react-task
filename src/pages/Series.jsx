import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCollections } from "../store/actions/collectionActions";
import MovieSeriesCard from "../components/MovieSeriesCard";

const Series = () => {
  const dispatch = useDispatch();

  const series_list = useSelector((state) => state.collection.collections);

  useEffect(() => {
    dispatch(getCollections("series"));

    return () => {
      dispatch({
        type: "SET_COLLECTIONS",
        payload: [],
      });
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {series_list.map((series) => (
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mb-4">
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

export default Series;
