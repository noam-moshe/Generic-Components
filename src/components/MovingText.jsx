import React, { useEffect, useRef } from 'react'

const Move = ({ timeToStart, text, width, speed, rounds , containerClassName , textClassName}) => {

    const textRef = useRef(null);
    const ContainerRef = useRef(null);
    let moveTimeOut = null
    let interval = null

    useEffect(() => {
        moveTimeOut = setTimeout(move, timeToStart || 1000)
        return () => {
            clearInterval(interval)
            clearTimeout(moveTimeOut)
        }
    }, [])

    const move = () => {
        try {
            let maxWidth = ContainerRef.current.offsetWidth
            let textWidth = textRef.current.offsetWidth
            if (textWidth > maxWidth) {
                let counter = 0
                interval = setInterval(() => {
                    let margin = Number(textRef.current.style.marginRight.replace('px', ''))
                    if (margin * -1 > textWidth) {
                        if (counter !== 0 && counter === Number(rounds) - 1) {
                            textRef.current.style.marginRight = 0
                            clearInterval(interval)
                        } else {
                            textRef.current.style.marginRight = maxWidth + 'px'
                            counter++
                        }
                        return
                    }
                    textRef.current.style.marginRight = margin - 1 + 'px'
                }, 1/(Number(speed) || 1) * 30)
            }
        }

        catch (err) {
            clearTimeout(moveTimeOut)
            clearInterval(interval)
        }
    }

    return (

        <div className={containerClassName} style={{direction:'rtl', width: width || '20vw', overflow: 'hidden' }} ref={ContainerRef}>
            <div className={textClassName} style={{whiteSpace: 'nowrap', width: 'fit-content' }} ref={textRef}>
                {text}
            </div>
        </div>

    );
}

export default Move;