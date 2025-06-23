import React from 'react'
import Img from '../../assets/outdoor4.jpg'

const Sub1 = () => {
    return (
        <div className='sub-section1'>
            <div className="sub-left">
                <img src={Img} alt="" id="img2" />
            </div>
            <div className="sub-right">
                <h2>Outdoor 4</h2>
                <div className="text-card">
                    <p>The fourth generation of our all-time best-selling camera is here!
                        Outdoor 4 features HD video, crisp two-way audio, enhanced motion detection, and more.
                        Person detection is also available with a Blink Subscription Plan (sold separately).
                        Blink Outdoor 4 goes where wires can’t to help you protect what matters most</p>
                </div>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Sub1
