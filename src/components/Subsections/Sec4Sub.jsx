import React from 'react'
import Img from '../../assets/outdoor4.jpg'


const Sec4Sub = ({ name, desc }) => {
  return (
    <div className='subSection4'>
      <img src={Img} alt="" />
      <div className='product-heading'>
        <h2>{name}</h2>
      </div>
      <p>
        {desc}
      </p>
      <div>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default Sec4Sub
