import React from "react";

function Review({ review }) {
  return (
    <div>
      <h5>{review.title}</h5>
      <p>{review.description}</p>
    </div>
  );
}
export default Review;
