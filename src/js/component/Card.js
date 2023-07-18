import React from 'react'

let cardStyle = {
    width: "18rem"
}
const Card = (props) => {
    
    return (
        <div className="card" style={cardStyle}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div >
    )
}

export default Card