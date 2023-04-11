import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'

import redChar from './redAmongUs.png'
import purpleChar from './blueAmongUs.png'
import greenChar from './greenAmongUs.png'
import pinkChar from './pinkAmongUs.png'
import blueChar from './blueAmongUs.png'

const Card = (props) =>  {
  var imgArr =[];
  if (props.color === "pint"){
    imgArr.push(pinkChar);
  }
  else if (props.color === "red"){
    imgArr.push(redChar)
  }
  else if (props.color === "purple"){
    imgArr.push(purpleChar)
  }
  else if (props.color === "green"){
    imgArr.push(greenChar)
  }
  else if (props.color === "blue"){
    imgArr.push(blueChar)
  }

  return (
      <div className="Card">
          <h2 className="title">{props.name}</h2>
          <h3 className="author">{props.color}</h3>
          <p className="description">{props.role}</p>
          <Link to={'profile/'+ props.id} className='profileLink'> Profile </Link>
      </div>
  );
};

export default Card;