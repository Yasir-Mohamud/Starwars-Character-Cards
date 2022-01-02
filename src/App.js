import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
export default function App() {
  const [starwarsData, setStarwarsData] = useState([]);

  useEffect(() => {
    console.log("EFFECT");
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then((response) => response.json())
      .then((data) => setStarwarsData(data));
  }, []);
  console.log(starwarsData);

  const starwarsCharacters = starwarsData.map((data) => {
    return (
      <Card
        key={data.id}
        image={data.image}
        name={data.name}
        species={data.species}
        height={data.height}
        mass={data.mass}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <main className="main">{starwarsCharacters}</main>
    </div>
  );
}
