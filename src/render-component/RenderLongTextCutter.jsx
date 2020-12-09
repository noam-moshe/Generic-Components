import React from 'react'
import LongTextCutter from '../components/LongTextCutter';
import Table from '../Table'

const RenderMovingText = () => {

    return (
        <>
            <div style={{ width: 'fit-content', margin: 'auto', backgroundColor: 'lightblue', padding: '0.5vh 0.5vw' }}>
                <LongTextCutter
                    text={"מסביב לעולם בשמונים יום - מאת ז'ול וורן"}
                    width='220px'
                    textClassName=''
                    containerClassName=''
                    background='lightblue'
                />
            </div>
            <Table info={[
                { props: 'text', type: 'String', info: 'הטקסט', default: 'null' },
                { props: 'width', type: 'String', info: 'רוחב הdiv הכללי שעוטף את הטקסט, אם הטקסט יוצא מגבולות הdiv הזה, נחתוך אותו בצורה יפה.', default: '20vw' },
                { props: 'background', type: 'String', info: 'צבע הdiv שברקע - בשביל הbackground: linear-gradient', default: 'white' },
                { props: 'gradientWidth', type: 'String', info: 'רוחב הcutter div שמופיע משמאל כאשר הטקסט ארוך מדי ', default: '20px' },
                { props: 'containerClassName', type: 'String', info: 'ה className של הdiv הגדול', default: 'null' },
                { props: 'textClassName', type: 'String', info: 'ה className של הdiv שמכיל את הטקסט', default: 'null' },

            ]} />
        </>
    );
}

export default RenderMovingText;