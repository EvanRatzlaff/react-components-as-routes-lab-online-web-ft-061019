import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return(
          <div key={index}>
            <h2>{actor.name}</h2>
            <p>Featured in:</p>
            <ul>
              {actor.movies.map((movie, index) => {
                return (
                  <li key={index}>{movie}</li>
                )
              })}
            </ul>
            </div>
        )
      })}
    </div>
  );
};

export default Actors;
