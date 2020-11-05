import React, { useState } from 'react';
import Card from '../components/Card'
import Table from '../Table'

const RenderCard = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ margin: 'auto', width: 'fit-content' }}>
            <Card
                top={<div style={{ color: 'var(--custom-gray)' }}>כותרת לכרטיס הנפתח - לחץ כאן</div>}
                isOpen={isOpen}
                onChange={(e) => { setIsOpen(e) }}
                speed={2}
                relativeSpeed={true}
                width={'50vw'}
                background={'lightblue'}

            >

                תוכן הכרטיס <br />
                תוכן הכרטיס <br />
                תוכן הכרטיס <br />


            </Card>
            <div style={{ direction: 'rtl', marginTop: '2vh' }}>
                הכרטיס נשלט מבחוץ - עליכם להגדיר state שמחזיק boolean אותו מעבירים לכרטיס באמצעות isOpen. <br />
                עליכם לשנות את אותו state כאשר הonChange נקרא.<br/>
                עליכם לעטוף את תוכן הכרטיס בקומפוננטה.
            </div>
            <Table
                info={[
                    { props: 'top', type: '*', info: 'התוכן שיוצג בחלק העליון של הכרטיס, לפני פתיחתו.', default: 'null' },
                    { props: 'isOpen', type: 'boolean', info: 'האם הכרטיס פתוח או סגור', default: 'null' },
                    { props: 'onChange', type: 'function', info: 'פונקציה שמקבלת ערך בוליאני - עליכם לעדכן ערך זה בstate ולהעביר אותו בisOpen לקומפוננטה.', default: 'null' },
                    { props: 'speed', type: 'Number', info: 'מהירות פתיחת הכרטיס (בשניות)', default: '1' },
                    {
                        props: 'relativeSpeed', type: 'boolean', info: `כאשר ערך זה הוא true, מהירות פתיחת הכרטיס תקבע ביחס לגודל התורן המוצג בכרטיס.
                     לכרטיס בעל תוכן ארוך יותר, יקח יותר זמן להיפתח.`, default: '1'
                    },
                    { props: 'width', type: 'String', info: 'רוחב הכרטיס', default: '30vw' },
                    { props: 'arrowColor', type: 'String', info: 'צבע החץ', default: 'black' },
                    { props: 'background', type: 'String', info: 'צבע רקע הכרטיס', default: 'white' },
                    // { props: 'arrowColor', type: 'String', info: 'צבע החץ', default: 'black' },


                ]}
            />
        </div>
    );
}

export default RenderCard;