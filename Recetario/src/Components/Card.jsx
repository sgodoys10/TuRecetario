import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({
    imgSrc,
    imgAlt, 
    title, 
    description, 
    buttonText, 
    link 
}) => {
  return (
    <div className='card-container'>
     {imgSrc && <img src={imgSrc} alt= {imgAlt} className='card-img'/>}
      <h1 className='card-title'>{title}</h1>
      <p className='card-description'>{description}</p>
      <Link to={link} className='card-btn'>{buttonText}</Link>
    </div>
  )
}

export default Card
