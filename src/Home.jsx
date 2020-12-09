import React, { useEffect, useRef, useState } from 'react';

const Components = [
    { name: 'Drop-down Card', path: '/card' },
    { name: 'Moving Text', path: '/moving-text' },
    { name: 'Mobile Slider', path: '/slider' },
    { name: 'Select', path: '/select' },
    { name: 'Lont Text Cutter', path: '/long-text-cutter' },
    { name: 'Swipe To Reload', path: '/swipe-to-reload' },

]


const Card = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {Components.map((component, index) => {
                return <div key={index} className='componentName' onClick={() => { props.history.push(component.path) }} >{component.name}</div>
            })}
        </div>
    );
}


export default Card;