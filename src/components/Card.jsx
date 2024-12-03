import React from 'react'
import { assets } from '../assets/gemini-clone-assets/assets/assets'

const Card = (props) => {
  return (
    <div className='h-72 bg-gray-100 rounded-lg'>
      <p>{props.text}</p>
      <img src={props.img} alt="" />
    </div>
  )
}

export default Card
