import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name} </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> SPECIES : {props.species} </li>
          <li className="list-group-item">HEIGHT : {props.height} </li>
          <li className="list-group-item">WEIGHT : {props.mass}</li>
        </ul>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}