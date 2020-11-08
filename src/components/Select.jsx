import React, { useState, useRef, useEffect } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faChevronDown);

// import DownArrow from '../icons/Icon awesome-chevron-down.svg'
// import useOnClickOutside from '../hooks/useOnClickOutside.js'
// import '../style/select.scss'

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref, handler]
    );
}

const Select = (props) => {
    const ref = useRef()
    useOnClickOutside(ref, () => setIsSelectOpen(false));

    const [selectedOption, setSelectedOption] = useState(null)
    const [isSelectOpen, setIsSelectOpen] = useState(false)

    return (
        <div style={{ width: props.width || '100%', cursor: 'pointer', direction: 'rtl' }} ref={ref}>
            <div style={{ position: 'relative', zIndex: 1 }} onClick={() => setIsSelectOpen(isSelectOpen => !isSelectOpen)}>
                <div className='select' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{width:'100%'}}>
                        {selectedOption || props.placeHolder || 'בחר'}</div>
                    <FontAwesomeIcon color={props.arrowColor || 'black'} icon={faChevronDown} />
                </div>
                {isSelectOpen &&
                    <div
                        className='optionsContainer'
                        style={{
                            position: 'absolute', overflow: 'auto', maxHeight: props.maxHeight || '200px', width: props.width || '100%'
                        }}>
                        {props.options && props.options.map((value, index) =>
                            <div
                                className='option'
                                key={index}
                                onClick={() => {
                                    setSelectedOption(value.name)
                                    props.onChange(value)
                                }}>
                                <div>
                                    {value.name}
                                </div>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default Select