import React, { useEffect, useRef, useState } from 'react';

const Components = [
    { name: 'כרטיס נפתח', path: '/card' },
    { name: 'טקסט זז', path: '/mooving-text' },
    { name: 'סליידר למובייל', path: '/slider' },

]


const Card = (props) => {

    return (
        <>
            {Components.map((component, index) => {
                return <div onClick={()=>{props.history.push(component.path)}} >{component.name}</div>
            })}
        </>
    );
}


export default Card;