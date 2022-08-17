import React, { useState, useEffect } from 'react'
import TextInput from './TextInput'

export const Form = ({ someRandomProp }) => {
    const defaultForm = {
        name: '',
        email: '',
        password: '',
        address: '',
    }

    const [formData, setFormData] = useState(defaultForm)
    const [formErrors, setFormErrors] = useState(defaultForm)

    useEffect(() => {
        // do this after the 1st render - "component did mount"
    }, [])

    useEffect(() => {
        // do this when something changed - "component did update"
    }, [formData.name, someRandomProp])

    useEffect(() => {
        return () => {
            // do this when the component leaves the DOM - "component will unmount"
            // cleanup, stop any kind of listeners/websockets/etc.
        }
    }, [])

    useEffect(() => {
        // create some kind of listener, open a websocket, fetch some data
        // happens on 1st render + anytime someRandomProp changes

        return () => {
            // stop any listeners, close websockets, cleanup
        }
    }, [someRandomProp])

    const isLengthValid = (length, min, max) =>
        length < min || length > max ? false : true

    const isEmailValid = email =>
        new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$').test(email)

    const validateForm = formData => {
        const isFormValid = !Object.entries(formData)
            .map(field => validateField(field))
            .includes(false)
        console.log({ isFormValid })
        return isFormValid
    }

    const validateField = ([key, value]) => {
        switch (key) {
            case 'name':
                if (!isLengthValid(value.length, 2, 100)) {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        name: 'not the right length',
                    }))
                    return false
                } else {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        name: '',
                    }))
                    return true
                }
            case 'email':
                if (!isEmailValid(value)) {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        email: 'not an email',
                    }))
                    return false
                } else {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        email: '',
                    }))
                    return true
                }
            case 'password':
                if (!Boolean(value)) {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        password: 'too short',
                    }))
                    return false
                } else {
                    setFormErrors(formErrors => ({
                        ...formErrors,
                        password: '',
                    }))
                    return true
                }
            default:
                return true
        }
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validateForm(formData)) {
            console.log('submit it')
        }
    }

    return (
        <div className='form'>
            <h1>Create an account</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
                    <TextInput
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        error={formErrors.name}
                    />
                    <TextInput
                        type='text'
                        name='email'
                        placeholder='email'
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                    />
                    <TextInput
                        type='text'
                        name='password'
                        placeholder='password'
                        value={formData.password}
                        onChange={handleChange}
                        error={formErrors.password}
                    />
                    <TextInput
                        type='text'
                        name='address'
                        placeholder='address'
                        value={formData.address}
                        onChange={handleChange}
                        error={formErrors.address}
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}
