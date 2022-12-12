import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img
          className="img"
          src="https://c8.alamy.com/comp/2H7MB4N/time-to-travel-cartoon-landing-page-passenger-airplane-flying-in-sky-buy-ticket-online-concept-with-plane-flight-booking-service-airline-traveling-journey-vacation-and-holidays-vector-web-banner-2H7MB4N.jpg"
          alt="Airline"
        />
      </div>
    </>
  );
};

export default Home;
