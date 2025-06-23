import React from 'react'
import Sub from './Subsections/Sec4Sub'
import '../styles/module.section4.css'

const Section4 = () => {

    const products = {
        p1: { name: "Outdoor 4", desc: "Outdoor 4 weathers the storm so you don’t have to and runs for up to two years on the two included AA batteries to help you protect your home inside and out. " },
        p2: { name: "All-new Video Doorbell", desc: "Video Doorbell is our second-generation smart security doorbell with up to two years of battery life, an expanded field of view, and improved security features for more peace of mind, no matter where you are." },
        p3: { name: "Mini 2", desc: "Mini 2 is our easy-to-use, tiny but mighty indoor/outdoor camera. Simply plug it in anywhere around your home for peace of mind, day and night. " }

    }
    return (
        <div className="section-4">
            <div className='sec4-upper'>
                <Sub name={products.p1.name} desc={products.p1.desc} />
                <Sub name={products.p2.name} desc={products.p2.desc} />
                <Sub name={products.p3.name} desc={products.p3.desc} />
            </div>
            <div className="sec4-lower">

            </div>
        </div>
    )
}

export default Section4
