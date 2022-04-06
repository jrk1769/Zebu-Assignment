import React from "react";

const Card = props => {
    return (
        <div className="card" style={{ width: "18rem"}}>
          <img className="card-img-top" src={props.img} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p>{props.gender.toUpperCase()}</p>
            <h6>{props.email}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-text"><small className="text-muted">{props.city+", "+props.state}</small></p>
            <p className="card-text"><small className="text-muted">{props.country}</small></p>
          </div>
        </div>
    )
}

export default Card;