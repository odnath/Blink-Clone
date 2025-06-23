import React from 'react'
import Sub1 from './Subsections/Sec2Sub1'
import Sub2 from './Subsections/Sec2Sub2'
import P1 from '../assets/mini2.png'
import P2 from '../assets/battery-extension.jpeg'


const Section2 = () => {
    const products = {
        "p1": { name: "Mini 2", img: P1, desc: "Our tiny, but mighty, plug-in smart security camera works inside or outside with the Blink Weather Resistant Power Adapter, and includes new features like HD night view in color with a built-in spotlight and a wider field of view. Stay connected with two-way audio and crisp HD video, and plug in Mini 2 just about anywhere around your home for the ultimate peace of mind." },
        "p2": { name: "Outdoor 4 battery extension pack", img: P2, desc: "Extend the battery life of Outdoor 4 (sold separately) by up to four years with standard use. You can also increase clip recordings, engage more frequently with two-way audio, and more without frequent battery replacement" },

    };
    return (
        <div className='section2'>
            <Sub2 img={products.p1.img} name={products.p1.name} desc={products.p1.desc} />
            <Sub1 />
            <Sub2 img={products.p2.img} name={products.p2.name} desc={products.p2.desc} />
        </div>
    )
}

export default Section2
