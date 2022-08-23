import { useAppSelector, useAppDispatch } from './app/hooks'
import './App.css'
import Homepage from './components/Homepage'

function App() {
    const dispatch = useAppDispatch()

    return (
        <div className='App'>
            <h1>Andrea Store</h1>
            <Homepage />
        </div>
    )
}

export default App
