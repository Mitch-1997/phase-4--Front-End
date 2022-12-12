import React, { useState, useEffect } from "react";
import Airline from "./Airline";
import Header from "./Header";
import ReviewForm from "./ReviewForm";

function Combined(airline) {
  const [airline, setAirline] = useState("");
  const [review, setReview] = useState("");

  //    console.log(airline)
  useEffect(() => {
    // console.log(airline)
    fetch(`http://localhost:3000/airlines/${id}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="wrapper">
        <div className="column">
          <Header attributes={airline.data.attributes} />
          <div className="reviews"></div>
          <div className="column">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Combined;
