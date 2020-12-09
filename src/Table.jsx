import React, { useEffect, useRef, useState } from 'react';

const Card = (props) => {

    return (
        <div style={{ width: 'fit-content', margin: 'auto', marginTop: '5vh' }}>
            <table>
                <thead>
                    <tr>
                        <th>Prop Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                {props.info.map((val, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>
                                    {val.props}
                                </td>
                                <td>
                                    {val.type}
                                </td>
                                <td style={{ direction: 'rtl', maxWidth: '30vw' }}>
                                    <div style={{ whiteSpace: 'pre-line' }}>
                                        {val.info}
                                    </div>
                                </td>
                                <td>
                                    {val.default}
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

        </div>
    );
}


export default Card;