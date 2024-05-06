import React from 'react';
import ReactDOM from 'react-dom';

function App() {

    // const thingsArray = ["Thing1", "Thing2"]

    // const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // const newThingText = `Thing ${things.length + 1}`
        // setThings(prevState => [...prevState, newThingText])
        // setThingsArray(prevThingsArray => {
        //     return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        // })
        setThingsArray(prevState => {
            return[...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    // const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));