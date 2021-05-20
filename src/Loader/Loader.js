import React from 'react';
import img from '../assets/SithEmblem.png';

function Loader() {
  return (
    <div>
      <img src={img} alt='sith logo' className='loader-img' />
      <p className="loader-p">Loading</p>
    </div>
  )
}

export default Loader;