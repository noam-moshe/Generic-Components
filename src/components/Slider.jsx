import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import { Swipeable } from 'react-swipeable'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faChevronRight, faChevronLeft);


function Slider(props) {

    const [currentIndex, setCurrentIndex] = useState(props.startIndex || 0)
    const [distance, setDistance] = useState(0)

    const onSwiped = (e) => {
        setDistance(0)
        switch (e.dir) {
            case 'Right':
                goLeft()
                break
            case 'Left':
                goRight()
                break
        }
    }

    const goLeft = () => {
        if (currentIndex < props.items.length - 1) {
            setCurrentIndex(prevIndex => { return prevIndex + 1 })
        }
    }

    const goRight = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => { return prevIndex - 1 })
        }
    }

    const onSwiping = (e) => {
        if ((e.dir === 'Left' && currentIndex <= 0 && e.deltaX > window.innerWidth * (props.sideBounce || 6) / 100)) return
        if ((e.dir === 'Right' && currentIndex >= props.items.length - 1 && -1 * e.deltaX > window.innerWidth * (props.sideBounce || 6) / 100)) return
        setDistance(e.deltaX)
    }

    return (
        <Swipeable onSwiping={props.swipeWithFinger ? onSwiping : () => { }} onSwiped={onSwiped} >
            <div style={{ position: 'relative', width: props.width || '100vw', overflow: 'hidden', direction: 'rtl' }}>
                {props.arrows && <div
                    style={{
                        position: 'absolute', right: '0', height: '100%', top: '0', display: 'flex', alignItems: 'center', padding: '0 3px 0 15px',
                        background: `linear-gradient(to left, ${props.arrowsBackground || 'white'} 50% , rgba(0,0,0,0))`
                    }}>
                    <div onClick={goRight}>
                        <FontAwesomeIcon
                            style={{
                                cursor: 'pointer',
                                opacity: currentIndex === 0 ? '0.5' : '1',
                                transition: '0.5s ease'
                            }}
                            color={props.arrowsColor || 'gray'} icon={faChevronRight} />
                    </div>
                </div>}
                <div style={{
                    display: 'flex',
                    width: 'fit-content',
                    transition: distance ? `margin-right 0.1s linear` : `margin-right ${props.speed || '0.5s'} ease`,
                    marginRight: `calc(-1 * ${currentIndex} * ${props.itemWidth || '70vw'} + ${distance}px )`
                }}>
                    {props.items && props.items.map((item, i) => {
                        return (
                            <div
                                onClick={() => { setCurrentIndex(i) }}
                                style={{
                                    marginRight: i === 0 ? `calc((${props.width} - ${props.itemWidth || '70vw'}) / 2)` : null,
                                    marginLeft: i === props.items.length - 1 ? `calc(( ${props.width || '100vw'} - ${props.itemWidth || '70vw'}) / 2)` : null,
                                    width: props.itemWidth || '70vw',
                                    height: props.itemHeight || 'fit-content',
                                }} key={i}>
                                <div style={{ pointerEvents: currentIndex !== i ? 'none' : null }}>{item}</div>
                            </div>
                        )
                    })}

                </div>
                {props.arrows && <div
                    style={{
                        position: 'absolute', left: '0', height: '100%', top: '0', display: 'flex', alignItems: 'center', padding: '0 15px 0 3px',
                        background: `linear-gradient(to right, ${props.arrowsBackground || 'white'} 50% , rgba(0,0,0,0))`
                    }}>
                    <div onClick={goLeft}>
                        <FontAwesomeIcon
                            style={{
                                cursor: 'pointer',
                                opacity: currentIndex === props.items.length - 1 ? '0.5' : '1',
                                transition: '0.5s ease'
                            }}
                            color={props.arrowsColor || 'gray'} icon={faChevronLeft} />
                    </div>
                </div>}
            </div>
        </Swipeable>
    )
}

export default Slider;