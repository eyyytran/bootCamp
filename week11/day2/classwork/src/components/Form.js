import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const defaultForm = {
        name: '',
        email: '',
        password: '',
        address: '',
    }

    const [formData, setFormData] = useState(defaultForm)
    const [submissionData, setSubmissionData] = useState(defaultForm)

    const isRequired = value => (value === '' ? false : true)

    const isLength = (length, min, max) =>
        length < min || length > max ? false : true

    const isEmail = email => {
        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        )

        return validEmail.test(email)
    }

    const helperFunction = arr => {
        switch (arr[0]) {
            case 'name':
                if (!isRequired(arr[1]) && isLength(arr[1], 5, 10)) return false
                return true
            case 'email':
                if (!isRequired(arr[1]) && isEmail(arr[1])) return false
                return true
            case 'password':
                if (!isRequired(arr[1])) return false
                return true
            case 'address':
                if (!isRequired(arr[1])) return false
                return true
            default:
                return false
        }
    }

    const validateInput = formData => {
        Object.entries(formData).forEach(form => helperFunction(form))
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(validateInput(formData))
    }

    return (
        <div className='form'>
            <h1>Create an account</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='address'
                        placeholder='address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}
