import React from 'react';

//Sometimes is easier to store data in objects
    //Object.keys will help us by creating a array of keys
const sourceObj = {
    val1: 'Value 1',
    val2: 'Value 2',
    val3: 'Value 3',
    val4: 'Value 4',
}

console.log(Object.keys(sourceObj))

const UltimateList = ()=> {
    return(
        <section>
            <h1>Ultimate Object Listing</h1>
            <ol>
                {Object.keys(sourceObj).map(key => (
                    <li key={key}>{sourceObj[key]}</li>
                ))}
            </ol>
        </section>
    )
}

// {sourceObj[key]}

export default UltimateList;