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
            <div style={{ width: 'fit-content', margin: 'auto' }}>
                <Select
                    placeHolder='בחר כיתה'
                    options={Grades}
                    width='15vw'
                    onChange={(value) => {
                    }}
                />
            </div>
            <Table
                info={[
                    { props: 'options', type: 'boolean', info: 'האופציות שניתן לבחור מהן בסלקט', default: 'null' },
                    { props: 'placeHolder', type: 'String', info: 'התוכן שיוצג בראש הסלקט לפני בחירת ערך', default: 'בחר' },
                    { props: 'onChange', type: 'function', info: 'פונקציה המחזירה את האיבר שנבחר', default: 'null' },
                    { props: 'width', type: 'function', info: 'רוחב הסלקט', default: '100%' },
                    { props: 'maxHeight', type: 'String', info: 'הגובה המקסימלי של הרשימה הנפתחת', default: '200px' },
                    { props: 'arrowColor', type: 'String', info: 'צבע החץ', default: 'black' },
                ]}
            />
        </div>
    );
}

export default RenderSelect;