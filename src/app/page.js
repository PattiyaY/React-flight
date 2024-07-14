"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [flights, setFlight] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.flightapi.io/onewaytrip/6690c4a1433021f10ef8794b/HEL/OUL/2024-07-20/1/0/0/Economy/USD"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFlight(data);
      });
  }, []);

  return (
    <main>
      {/* <h1>Consuming REST api tutorial</h1> */}
      <h1>Flight Data</h1>
      {/* {flights.map((flight) => (
        <p key={flight.id}>{flight.title}</p>
      ))} */}
    </main>
  );
}
