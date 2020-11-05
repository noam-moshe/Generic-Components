import React, { useEffect, useRef, useState } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faChevronDown);

const Card = (props) => {
    const [height, setHeight] = useState(false)
    const [relative, setRelative] = useState(1)
    const ref = useRef()

    useEffect(() => {
        let bottom = document.getElementById('bottom')
        if (bottom) {
            setHeight(bottom.getBoundingClientRect().height)
            setRelative(bottom.getBoundingClientRect().height / 100)
        }
    }, [props.children])

    return (
        <div
            style={{
                width: props.width || '30vw',
                backgroundColor: props.background || 'white',
                direction: 'rtl',
                borderRadius: props.borderRadius || '10px',
                textAlign: 'right',
                padding: '1vh 2vw'
            }}>
            <div
                onClick={() => {if(typeof props.onChange === 'function') props.onChange(!props.isOpen) }}
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} >
                <div>{props.top}</div>
                <div style={{ transform: props.isOpen ? 'rotate(180deg)' : null, width: 'fit-content', transition: 'transform 0.4s ease' }}>
                    <FontAwesomeIcon color={props.arrowColor || 'black'} icon={faChevronDown} />
                </div>
            </div>
            <div style={{
                height: props.isOpen ? height + 'px' : 0,
                overflow: 'hidden',
                transition: `height ${props.relativeSpeed ? relative / (props.speed || 1) + 's' : props.speed ? props.speed + 's' : '1s'} linear`
            }}>
                <div ref={ref} id='bottom' style={{ height: 'fit-content' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export default Card;