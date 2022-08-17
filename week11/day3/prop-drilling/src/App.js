import './App.css'
import { useEffect, useState } from 'react'
import Prop1 from './components/Prop1'

function App() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Use Effect')
    })

    const houses = [
        {
            name: 'my house',
            address: '123 Main Street',
        },
        {
            name: 'beach house',
            address: '123 Main Street',
        },
        {
            name: 'rental house',
            address: '123 Main Street',
        },
        {
            name: 'abandoned house',
            address: '123 Main Street',
        },
        {
            name: 'burnt down house',
            address: '123 Main Street',
        },
    ]

    const owner = {
        name: 'Andrea',
    }

    return (
        <div className='App'>
            <h1>What is up?</h1>
            <button type='submit' onClick={() => setCounter(counter + 1)}>
                +
            </button>
            {/* <Prop1 houses={houses} owner={owner} /> */}
        </div>
    )
}

export default App
