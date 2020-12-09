import React, { useEffect, useState, useRef } from 'react';
import { Swipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import { faRedo } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faRedo);

let timeOut = null

const SwipeToRender = (props) => {

    const [startPoint, setStartPoint] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [scroll, setScroll] = useState(0)
    const container = useRef()

    const startPosition = props.size ? -1 * window.innerHeight / 100 * (Number(props.size) + 2.5) : -1 * window.innerHeight / 100 * 6

    useEffect(() => {
        container.current && container.current.addEventListener('scroll', onScroll, true)
        return () => {
            container.current && container.current.removeEventListener('scroll', onScroll, true)
            clearTimeout(timeOut)
        }
    }, [])

    const onScroll = () => {
        setScroll(1)
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            setScroll(0)
        }, 800)
    }

    const handleSwipe = (e) => {

        if (scroll) return
        if (e.dir !== 'Down') return


        let topPercentage = ((-1 * e.deltaY + startPoint)) / (window.innerHeight / 4) * 100

        if (startPoint === 0) {
            setStartPoint(e.deltaY)
        }

        if (topPercentage >= 100) {
            setPercentage(100)
        }

        else if (topPercentage >= 0) {
            setPercentage(topPercentage)
        }
    }

    return (
        <Swipeable
            style={{ position: 'relative', overflow: 'hidden' }}
            onSwiping={handleSwipe}
            onSwiped={() => {
                (async () => {
                    if (percentage === 100 && typeof props.onSwipeEnd === 'function') {
                        await props.onSwipeEnd()
                    }
                    setPercentage(false);
                    setStartPoint(0)
                })()
            }}>
            {props.children}
            <div style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                right: 0,
                left: 0,
                top: percentage ? startPosition + (percentage * (props.distance || 6.5) / 10) : startPosition,
                height: props.size ? props.size + 'vh' : '4vh',
                width: props.size ? props.size + 'vh' : '4vh',
                backgroundColor: props.backgroundColor ? props.backgroundColor : 'white',
                borderRadius: '50%',
                boxShadow: '2px 5px 10px rgba(72, 72, 72, 0.39)',
                transition: percentage === false ? '0.5s ease' : null,
                opacity: percentage === false ? '0' : '1'

            }}>
                <FontAwesomeIcon
                    style={{
                        fontSize: props.size ? props.size * 6 / 10 + 'vh' : 24 / 10 + 'vh',
                        transform: `rotate(${percentage * (props.speed || 5)}deg)`,
                        opacity: percentage / 100,
                        transition: percentage === false ? '0.5s ease' : null
                    }}
                    icon={faRedo} color={props.color ? props.color : 'black'} />

            </div>
        </Swipeable>
    )
}

export default SwipeToRender;