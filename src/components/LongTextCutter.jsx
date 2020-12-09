import React, { useEffect, useRef, useState } from 'react'

const LongTextCutter = ({ text, width, containerClassName, textClassName, background, gradientWidth}) => {

    const [cutter, setCutter] = useState(false)
    const textRef = useRef(null);
    const ContainerRef = useRef(null);

    useEffect(() => {
        let maxWidth = ContainerRef.current.offsetWidth
        let textWidth = textRef.current.offsetWidth
        if (textWidth > maxWidth) {
            setCutter(true)
        }
    }, [])

    return (

        <div className={containerClassName} style={{ direction: 'rtl', width: width || '20vw', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }} ref={ContainerRef}>
            {cutter && <div style={{
                position: 'absolute', left: '0', width: gradientWidth || '20px', height: '100%',
          
                background: `linear-gradient(90deg, ${background || 'white'} 25%, rgba(0,0,0,0) 100%)`
            }} ></div>}

            <div className={textClassName} style={{ whiteSpace: 'nowrap', width: 'fit-content' }} ref={textRef}>
                {text}
            </div>
        </div>

    );
}

export default LongTextCutter;