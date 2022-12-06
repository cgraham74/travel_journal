import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";



export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.photo}
        className="card--image"
        alt="beautiful travel scenery"
      />
      <div className="card--info">
      <div className="card--title"><FaMapMarkerAlt className="marker"/>
        <p className="country">{props.country.toUpperCase()}</p>
        <p className="map">
          <a href={props.mapLink}>View on the Google</a>
        </p>
        </div>  
        <p className="location">{props.location}</p>
        <p className="date">{props.travelDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
