import React, { useState, useEffect } from "react";
import AirlineCard from "./AirlineCard";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 25px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

function Airlines() {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/airlines")
      .then((resp) => resp.json())
      //  .then((data) => console.log(data))
      .then((data) => setAirlines(data))
      .catch((error) => console.log(error));
  }, []);
  const air = airlines.map((airline) => {
    return <AirlineCard key={airline.id} airline={airline} />;
  });
  console.log(airlines);
  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, accurate and unbiased airline reviews.</Subheader>
      </Header>
      <Grid>{air}</Grid>
    </Home>
  );
}

export default Airlines;
