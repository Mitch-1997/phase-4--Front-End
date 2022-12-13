import React, { useState, useEffect } from "react";
import "./ReviewForm.css";
import { useParams } from "react-router-dom";

function ReviewForm() {
  const [reviewData, setReviewData] = useState([])
  let { id } = useParams();
  const [formData, setformData] = useState({
    title: "",
    description: "",
    airline_id: id,
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert(response);
        } else {
          alert("failed");
        }
      })
      .then(window.location.reload());
    // console.log(airline);
  };
  useEffect(() => {
    // DELETE request using fetch inside useEffect React hook
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
    }).then(() => console.log("Delete successful"));
  }, []);
        function handleDeleteReview(reviewToDelete) {
          const updatedReviews = reviewData.filter((review) => {
            if (review.id !== reviewToDelete.id) {
              return review;
            } else {
              return null;
            }
          });
          setReviewData(updatedReviews);
        }
  

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="share">
            Have an experience with this airline? Add your review!
          </div>
          <div className="field">
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="title"
              value={formData.title}
              placeholder="Review Title"
            ></input>
          </div>
          <div className="field">
            <input
              className="input"
              onChange={handleChange}
              type="text"
              name="description"
              value={formData.description}
              placeholder="Review Description"
            ></input>
          </div>
          <div className="field"></div>
          <button className="submit" type="submit">
            Submit Your Review
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
