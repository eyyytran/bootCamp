import React from 'react'

const TextInput = ({ value, onChange, name, error, placeholder }) => {
    // some javascript...

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                type='text'
                name={name}
                placeholder={placeholder || name}
                value={value}
                onChange={onChange}
                style={{ borderColor: error && 'red' }}
            />
            {error && <span>{error}</span>}
        </div>
    )
}

export default TextInput
