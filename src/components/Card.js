import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-header bg-secondary text-dark">
          {props.name ? props.name : "N/A"}{" "}
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            SPECIES : {props.species ? props.species : "N/A"}{" "}
          </li>
          <li className="list-group-item">
            HEIGHT : {props.height ? props.height : "N/A"}
          </li>
          <li className="list-group-item">
            WEIGHT : {props.mass ? props.mass : "N/A"}
          </li>
        </ul>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
}
