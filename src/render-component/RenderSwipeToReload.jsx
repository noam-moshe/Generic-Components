import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import SwipeToReload from '../components/SwipeToReload'
import Table from '../Table'

const ItemsOnDb = [
    'חלב',
    'ביצים',
    'לחם',
    'עגבניות',
    'מלפפונים',
    'גבינה לבנה',
    'חומוס',
    'בצל',
    'קוטג',

]

const RenderCard = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItemsFromDb()
    }, [])

    const getItemsFromDb = () => {
        setLoading(true)
        setTimeout(() => {
            setItems(ItemsOnDb)
            setLoading(false)
        }, 1000)
    }

    return (
        <div style={{ margin: 'auto', width: 'fit-content' }}>

            <SwipeToReload
                color='lightblue'
                onSwipeEnd={
                    /// דימוי של הבאה מהשרת
                    (async () => {
                        getItemsFromDb()
                    })
                }>

                <div style={{height: '100px' , overflow:'auto' , width:'150px' , textAlign:'center' , margin:'auto'}}>
                    {loading ? <Loading borderSize='3px' height='100%' width='100%' color='lightblue' size='30px' /> :
                        items.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item}
                                </div>
                            )
                        })}
                </div>

            </SwipeToReload>

            <div style={{ direction: 'rtl', marginTop: '2vh' }}>
                <strong>מתאים לmobile שהוא לא אתר או PWA </strong><br />
                כאשר המשתמש יחליק עם האצבע מלמעלה למטה, יופיע חץ מסתובב מלמעלה.<br />
                אם המשתמש החליק עם האצבע למרחק ארוך מספיק (לבחירתכם), תפעל הפונקציה שתעבירו לקומפוננטה.
            </div>
            <Table
                info={[
                    { props: 'onSwipeEnd', type: 'function', info: 'פונקציה הפועלת כאשר המשתמש סיים להחליק את האצבע עד הסוף', default: 'null' },
                    { props: 'size', type: 'String', info: 'גודל החץ והעיגול המופיעים מלמעלה בזמן שהמשתמש מחליק עם האצבע.', default: '4vh' },
                    { props: 'distance', type: 'Number', info: 'המרחק שעל המשתמש לעבור בזמן ההחלקה עם האצבע כדי שהפונקציה תפעל', default: '6.5' },
                    { props: 'color', type: 'String', info: 'צבע החץ שמופיע מלמעלה', default: 'black' },
                    { props: 'backgroundColor', type: 'String', info: 'צבע העיגול העוטף את החץ שמופיע מלמעלה', default: 'white' },
                    { props: 'speed', type: 'Number', info: 'מהירות הסיבוב של החץ', default: '5' },
                ]}
            />
        </div>
    );
}

export default RenderCard;

