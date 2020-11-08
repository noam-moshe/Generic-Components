import React from 'react'
import Select from '../components/Select'
import Table from '../Table'

const Grades = [
    { id: 1, name: 'א' },
    { id: 1, name: 'ב' },
    { id: 1, name: 'ג' },
    { id: 1, name: 'ד' },
    { id: 1, name: 'ה' },
    { id: 1, name: 'ו' },
    { id: 1, name: 'ז' },
    { id: 1, name: 'ח' },
    { id: 1, name: 'ט' },
    { id: 1, name: 'י' },
    { id: 1, name: 'יא' },
    { id: 1, name: 'יב' },
]

const RenderSelect = () => {

    return (
        <div style={{ width: 'fit-content', margin: 'auto' }}>
            <Select
                placeHolder='בחר כיתה'
                options={Grades}
                width='15vw'
                onChoseOption={(value) => {
                }}
            // arrowColor='lightblue'

            />
        </div>
    );
}

export default RenderSelect;