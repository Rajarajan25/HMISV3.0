import React from 'react';
import Query from 'devextreme/data/query';
import localization from 'devextreme/localization';
import { moviesData } from './data.js';

function getMovieById(id) {
  return Query(moviesData).filter(['id', id]).toArray()[0];
}

export default function AppointmentTemplate(model) {
  const movieInfo = getMovieById(model.appointmentData.movieId) || {};
  return (
    <>
    <div className="movie">
      <div className="movie-img">
        <img src={movieInfo.image} alt={movieInfo.imageAlt}/>
      </div>
      <div className="movie-text col"> 
        <div className="service_name">{movieInfo.text}</div>
        <div className="service_time">
          {localization.formatDate(model.appointmentData.startDate, 'shortTime')}
          {' - '}
          {localization.formatDate(model.appointmentData.endDate, 'shortTime')}  
        </div>
      </div>
    </div>
    </>
  );
}
