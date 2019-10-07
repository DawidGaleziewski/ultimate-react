import React from 'react';
const listOfStrings = [
    'The beach',
    'The mountains',
    'Vibrant cities',
    'Roughting it',
    'Ultimate survival'
]

const listOfObjects = [
    {name: 'The beach'},
    {name: 'The mountains'},
    {name: 'Vibrant cities'},
    {name: 'Roughting it'},
    {name: 'Ultimate survival'}
]

//If we simply try to render the array, it will render but it will join a aray into one string
    {/* <ul>
    {list}
    </ul> */}
    //This is not valid html type, but will still render as arrays can be used in JSX and will eval into strings

//React components cannot however return objects. So if we use array of objects the app will crash


const UltimateHolidayList = () => <section>
    <h1>Ultimate Holiday Destinations</h1>
    <ul>
        {listOfStrings}
        {listOfObjects}
    </ul>
</section>
export default UltimateHolidayList;