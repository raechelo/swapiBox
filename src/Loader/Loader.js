import React from 'react';
import img from '../assets/SithEmblem.png'

function Loader() {
  return (
    <img src={img} alt='sith logo' className='loader' />
  )
}

export default Loader;