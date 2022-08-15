import './App.css'
import { useState } from 'react'
import { students, tas } from './dummData'
import Header from './components/Header'
import Footer from './components/Footer'
import LeftSidebar from './components/LeftSidebar'
import RightSideBar from './components/RightSidebar'
import MainContent from './components/MainContent'

function App() {
    const [counter, setCounter] = useState(0)
    const [mood, setMood] = useState(false) //conditional rendering

    const addCounter = () => {
        setCounter(counter + 1)
    }

    const subtractCounter = () => {
        if (counter === 0) {
            return
        }
        setCounter(counter - 1)
    }

    return (
        <div className='App'>
            <Header />
            <LeftSidebar />
            <MainContent />
            <RightSideBar />
            <Footer />
            {/* <h1>Counter</h1>
            <div className='counter'>{counter}</div>
            <button onClick={addCounter}>+</button>
            <button onClick={subtractCounter}>-</button>

            <h1>How are you feeling today?</h1>
            <div className='mood'>{mood ? 'sad' : 'happy'}</div>
            <button onClick={() => setMood(!mood)}>Change Mood</button> */}
        </div>
    )
}

export default App
