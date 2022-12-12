import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import "./Airline.css";

const Container = styled.div`
  display: flex;
`;
const AirlineHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    height: auto;
    width: 2rem;
    border-radius: 100%;
    border: 1px solid #efefef;
  }

  div {
    font-size: 25px;
    font-weight: 700;
    margin-left: 5px;
  }
`;
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
  padding-left: 60px;
`;

function Airline() {
  let { id } = useParams();
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // console.log(airline)
    fetch(`http://localhost:3000/airlines/${id}`)
      .then((resp) => resp.json())
      .then((data) => setAirline(data));
  }, [id]);

  const kq =
    airline.reviews?.map((review) => {
      return <Review key={review.id} review={review} />;
    }) || " ";
  return (
    <Container>
      <div className="reviews-column">
        <AirlineHeader>
          <img src={airline?.image_url || ""} alt={airline?.name || ""} />
          <div>{airline.name}</div>
        </AirlineHeader>
        <div className="reviews-stats">
          <div className="reviews-stats-title"> </div>
          <div className="reviews-stats-stars"></div>
          <div className="reviews-stats-info"></div>
        </div>
        <div className="reviews-comments">
          <div className="reviews-comments-header">
            <div className="reviews-comments-profile"></div>
            <div className="reviews-comments-stars">
              <span></span>
              <span></span>
            </div>
            <div className="reviews-comments-name"></div>
          </div>
          <div className="reviews-comments-body">
            <div className="reviews-comments-title">{kq}</div>
            <div className="reviews-comments-info"> </div>
          </div>
        </div>
      </div>
      <div className="reviews-form-column">
        <ReviewForm airline={airline} />
      </div>
      {/* <AirlineName>{airline?.name || ""} </AirlineName>
        <div className="airline-score">{airline?.avg_score || ""}</div>
        {kq}
      </div>
      <div>
        <ReviewForm airline={airline} />
      </div> */}
    </Container>
  );
}

export default Airline;
