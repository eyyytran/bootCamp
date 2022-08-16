import './App.css'
import { useState } from 'react'

function App() {
    const defaultForm = {
        name: '',
        password: '',
        email: '',
        address: '',
    }

    const isRequired = value => (value === '' ? false : true)

    const isLength = (length, min, max) =>
        length < min || length > max ? false : true

    const isEmail = email => {
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        )

        return validEmail.test(email)
    }

    const [formData, setFormData] = useState(defaultForm)

    const validateInput = e => {
        const text = e.target.value
        const name = e.target.name
        switch (name) {
            case 'email':
                console.log(isRequired(text))
                console.log(isEmail(text))
                break
            case 'name':
                console.log(isRequired(text))
                console.log(isLength(text.length, 5, 10))
                break
            default:
                break
        }
    }

    return (
        <div className='App'>
            <h1>Form</h1>
            <div className='form-container'>
                <form>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        defaultValue={formData.name}
                        onChange={e => validateInput(e)}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        defaultValue={formData.email}
                        onChange={e => validateInput(e)}
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
