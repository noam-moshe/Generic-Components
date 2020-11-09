import React, { useEffect, useRef, useState } from 'react';

const Components = [
    { name: 'Drop-down Card', path: '/card' },
    { name: 'Mooving Text', path: '/mooving-text' },
    { name: 'Mobile Slider', path: '/slider' },
    { name: 'Select', path: '/select' },
    { name: 'Lont Text Cutter', path: '/long-text-cutter' }

]


const Card = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {Components.map((component, index) => {
                return <div className='componentName' onClick={() => { props.history.push(component.path) }} >{component.name}</div>
            })}
        </div>
    );
}


export default Card;