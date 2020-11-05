import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable'

function Slider(props) {

    const [currentIndex, setCurrentIndex] = useState(props.startIndex || 0)
    const [distance, setDistance] = useState(0)

    const onSwiped = (e) => {
        setDistance(0)
        switch (e.dir) {
            case 'Right':
                if (currentIndex < props.items.length - 1) {
                    setCurrentIndex(prevIndex => { return prevIndex + 1 })
                }
                break
            case 'Left':
                if (currentIndex > 0) {
                    setCurrentIndex(prevIndex => { return prevIndex - 1 })
                } break
        }
    }

    const onSwiping = (e) => {
        if ((e.dir === 'Left' && currentIndex <= 0 && e.deltaX > window.innerWidth / (props.sideBounce || 6))) return
        if ((e.dir === 'Right' && currentIndex >= props.items.length - 1 && -1 * e.deltaX > window.innerWidth / (props.sideBounce || 6))) return
        setDistance(e.deltaX)
    }

    return (
        <Swipeable onSwiping={props.swipeWithFinger ? onSwiping : ()=>{}} onSwiped={onSwiped} >
            <div style={{ width: props.width || '100vw', overflow: 'hidden', direction: 'rtl' }}>
                <div style={{
                    display: 'flex', width: 'fit-content',
                    transition: distance ? `margin-right 0.1s linear` : `margin-right ${props.speed || '0.5s'} ease`,
                    marginRight: `calc(-1 * ${currentIndex} * ${props.itemWidth || '70vw'} + ${distance}px )`
                }}>
                    {props.items && props.items.map((item, i) => {
                        return (
                            <div
                                onClick={() => { setCurrentIndex(i) }}
                                style={{
                                    marginRight: i === 0 ? `calc((${props.width} - ${props.itemWidth || '70vw'}) / 2)` : null,
                                    marginLeft: i === props.items.length - 1 ? `calc((100vw - ${props.itemWidth || '70vw'}) / 2)` : null,
                                    width: props.itemWidth || '70vw',
                                    height: props.itemHeight || 'fit-content',
                                }} key={i}>
                                <div style={{ pointerEvents: currentIndex !== i ? 'none' : null }}>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Swipeable>
    )
}

export default Slider;