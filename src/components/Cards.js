/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import images from "../images/pin.png"


export default function Cards(props){
    return(
      <div className="row">
      <div className="card left">
      <img src={props.item.imageUrl} className="card--images" /> </div>
        <div className="card right">
          <img src={images} className="icon--loc"/>
          <span className="title">{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps </a>
          <h1 className="card title">{props.item.title}</h1>
         <div className="date"> <span>{props.item.startDate} </span>
          -
          <span > {props.item.endDate}</span></div>
          <p>{props.item.description}</p>
          
      </div> </div>
    )
}