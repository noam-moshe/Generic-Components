import React, { useState } from 'react';
import Slider from '../components/Slider'
import Table from '../Table'

import one from '../icons/one.svg'
import two from '../icons/two.svg'
import three from '../icons/three.svg'


const RenderCard = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ margin: 'auto', width: 'fit-content' }}>
            <div style={{ margin: 'auto', width: 'fit-content', border: '1px solid black', height: 'fit-content' }}>
                <Slider
                    width='300px'
                    itemWidth='200px'
                    swipeWithFinger={true}
                    items={[
                        <div style={{ display: 'flex', justifyContent: 'center' }} >
                            <img style={{ width: '80%' }} src={one} />
                        </div>
                        ,
                        <div style={{ display: 'flex', justifyContent: 'center' }} >
                            <img style={{ width: '80%' }} src={two} />
                        </div>,
                        <div style={{ display: 'flex', justifyContent: 'center' }} >
                            <img style={{ width: '80%' }} src={three} />
                        </div>
                    ]} />
            </div>

            <div style={{ direction: 'rtl', marginTop: '2vh' }}>
                סליידר לmobile בלבד <br />
                על ידי החלקה (swipe) או לחיצה על הפריט הבא, נגיע אליו.<br />
                (אל תדאגו, אם יש onClick לפריט צדדי, הוא לא יופעל)
            </div>
            <Table
                info={[
                    { props: 'items', type: 'array', info: 'מערך שמקבל את תוכן הסליידר - כל איבר במערך הוא פריט אחד בסליידר.', default: 'null' },
                    { props: 'sideBounce', type: 'Number', info: 'רמת הקפיציות כאשר מגיעים לקצה הסליידר.', default: '6' },
                    { props: 'speed', type: 'String', info: 'מהירות המעבר בין פריט לפריט לאחר ההחלקה', default: '0.5s' },
                    { props: 'width', type: 'String', info: 'הרוחב הכללי של הסליידר', default: '100vw' },
                    { props: 'itemWidth', type: 'String', info: 'רוחב הפריטים בסליידר (אם רוצים לראות קצת מהפריטים האחרים בסליידר, כמו בדוגמא, הרוחב של הפריטים צריך להיות קטן יותר מרוחב הסליידר)', default: '70vw' },
                    { props: 'itemHeight', type: 'String', info: 'גובה הפריטים', default: 'fit-content' },
                    { props: 'swipeWithFinger', type: 'boolean', info: 'אם מוגדר כtrue, הפריטים יזוזו עם האצבע, תוך כדי הswipe, ולא רק בסיום הswipe.', default: 'null' },
                ]}
            />
        </div>
    );
}

export default RenderCard;