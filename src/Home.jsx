import React, { useEffect, useRef, useState } from 'react';

const Components = [
    { name: 'Drop-down Card', path: '/card' },
    { name: 'Mooving Text', path: '/mooving-text' },
    { name: 'Mobile Slider', path: '/slider' },
]


const Card = (props) => {

    return (
        <div style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
            {Components.map((component, index) => {
                return <div className='componentName' onClick={()=>{props.history.push(component.path)}} >{component.name}</div>
            })}
        </div>
    );
}


export default Card;