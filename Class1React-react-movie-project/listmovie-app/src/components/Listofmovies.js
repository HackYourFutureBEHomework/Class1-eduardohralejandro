import React, { Component } from "react";

const Listofmovies = props => {
  return (
    <div>
      <ul>
        <li>
          <img src={props.movie.imgSrc} />
        </li>
        <button className="btn">
          <a target="_blank" href={props.movie.trailer}>
            Watch trailer
          </a>
        </button>
        <h2>{props.movie.name}</h2>
        <li>
          <strong>Description: </strong> {props.movie.description}
        </li>
        <li>
          <strong>Actors:</strong> {props.movie.actors}
        </li>
        <li>
          <strong>duration:</strong>
          {props.movie.duration}
        </li>
        <li>{props.movie.genres}</li>
      </ul>
    </div>
  );
};

export default Listofmovies;
