import React, {useState} from 'react';

const list = [
    {id: 1, name: 'The beach', topDestination: true},
    {id: 2, name: 'The mountains', topDestination: false},
    {id: 3, name: 'Vibrant cities', topDestination: false},
    {id: 4, name: 'Roughing it', topDestination: true},
    {id: 5, name: 'Ultimate survival', topDestination: true}
];
//Array.filter - very useful function
    //Used for client side filters
    //Filter checks condition using truthy and falsy values


const UltimateHolidayList = ()=> {

    const [showAll, setShowAll] = useState(true);

    //Example of simple filters
    console.log(list.filter( item=> item.topDestination))
    console.log(list.filter(item=> item.id > 4))
    console.log(list.filter(item => item.name === 'The beach'))

    return (
        <section>
            <h1>Ultimate Holiday Destination</h1>
            {list.filter(item => showAll ? true : item.topDestination)
                .map(item => <li key = {item.id.toString()}>{item.name} </li>)
            }

            <button onClick= {()=> {
                setShowAll(true)
            }} 
            type="button">
                Show all
            </button>
            <button 
            onClick = {()=> {
                setShowAll(false)
            }}
            type="button">Show only top destinations</button>
        </section>
    )
}

export default UltimateHolidayList;