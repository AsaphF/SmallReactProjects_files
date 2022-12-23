import React from 'react';


export default function Things() {
    const [things, setThings] = React.useState([])
    
    function addItem(){
        let thingsplus = `Things ${things.length + 1}`
        setThings(prevstate => [...prevstate, thingsplus])
        
    }
        let thingsElements = things.map(thing =>
            <p key={thing.length}>{thing}</p>
        )   
        return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

