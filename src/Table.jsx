import React, { useEffect, useRef, useState } from 'react';

const Card = (props) => {

    return (
        <div style={{width: 'fit-content', margin:'auto' , marginTop: '5vh'}}>
            <table>
                <th>Prop Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
                {props.info.map((val, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {val.props}
                            </td>
                            <td>
                                {val.type}
                            </td>
                            <td style={{direction:'rtl' , maxWidth:'30vw'}}>
                            <div style={{whiteSpace:'pre-line'}}>
                                {val.info}
                            </div>
                            </td>
                            <td>
                                {val.default}
                            </td>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
}


export default Card;