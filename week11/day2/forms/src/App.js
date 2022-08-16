import './App.css'
import { useState } from 'react'

function App() {
    const defaultForm = {
        name: '',
        password: '',
        email: '',
        address: '',
    }
    const [formData, setFormData] = useState(defaultForm)
    return (
        <div className='App'>
            <h1>Form</h1>
            <div className='form-container'>
                <form>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={formData.name}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        value={formData.email}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='password'
                        value={formData.password}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <input
                        type='text'
                        name='address'
                        placeholder='address'
                        value={formData.address}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default App
