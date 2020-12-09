import React from 'react';

const Loading = (props) => {
    return (
        <div style={{
            height: props.height, width: props.width,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'lightblue'
        }}>
            <div className="loading" style={{
                animation: `loading ${1 / (props.speed || 1)}s linear infinite`,
                width: props.size, height: props.size, borderColor: props.color || null, borderWidth: props.borderSize || 'unset'
            }}>
            </div>
        </div >
    )
}

export default Loading