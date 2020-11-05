import React from 'react'
import MoovingText from '../components/MoovingText'
import Table from '../Table'

const RenderMoovingText = () => {

    return (
        <>
            <div style={{ width: 'fit-content', margin: 'auto', backgroundColor: 'lightblue', borderRadius: '100px', padding: '0.5vh 0.5vw' }}>
                <MoovingText
                    rounds={2}
                    speed={4}
                    text={"מסביב לעולם בשמונים יום - מאת ז'ול וורן"}
                    timeToStart={2000}
                    width='200px'
                    textClassName=''
                    containerClassName=''
                />
            </div>
            <Table info={[
                { props: 'text',type:'String', info: 'הטקסט', default: 'null' },
                {
                    props: 'rounds',
                    type:'Number',
                    info: `כמות הסיבובים שהטקסט יעשה לפני עצירה.
                           בשביל אינסוף סיבובים - לשים 0.`,
                    default: 'null'
                },
                { props: 'speed',type:'Number', info: 'מהירות הסיבובים', default: '4' },
                { props: 'timeToStart',type:'Number', info: 'הזמן (ms) שהטקסט יחכה לפני שהוא יתחיל את הסיבוב הראשון שלו', default: '1000' },
                { props: 'width',type:'String', info: 'רוחב הdiv הכללי שעוטף את הטקסט, אם הטקסט יוצא מגבולות הdiv הזה, הוא יתחיל לזוז.', default: '20vw' },
                { props: 'containerClassName',type:'String', info: 'ה className של הdiv הגדול', default: 'null' },
                { props: 'textClassName',type:'String', info: 'ה className של הdiv שמכיל את הטקסט', default: 'null' },

            ]} />
        </>
    );
}

export default RenderMoovingText;