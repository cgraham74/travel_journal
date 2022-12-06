import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";


/**
 * A React component written with ES6 syntax. It takes in props as an argument. 
 * The title is comprised of a country name passed in through props and a 
 * link to the Google Maps page for that location.
 * @param {*} props 
 * @returns a div with an image, a title, a location, a date, and a description.
 */
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
