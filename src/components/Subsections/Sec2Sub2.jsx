import React from 'react'

const Sub2 = ({ img, name, desc }) => {

    return (
        <div className='sub-section2'>
            <div className="sub-right">
                <h2>{name}</h2>
                <div className="text-card">
                    <p>{desc}</p>
                </div>
                <button>Learn More</button>
            </div>
            <div className="sub-left">
                <img src={img} alt="" id="img2" />
            </div>
        </div>
    )
}

export default Sub2
