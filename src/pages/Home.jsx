import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex">
      <Link to="/movies" className="d-flex flex-column align-items-center">
        <img
          src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg"
          alt="Movies"
          width="100"
          height="200"
        />
        <p>Movies</p>
      </Link>
      <Link to="/series" className="d-flex flex-column align-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-4zJ7bIhKFcmDh5ZpdZ1dL48385zwqqNDA&usqp=CAU"
          alt="Series"
          width="100"
          height="200"
        />
        <p>Series</p>
      </Link>
    </div>
  );
};

export default Home;
