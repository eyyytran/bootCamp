import React from 'react'
import Prop2 from './Prop2'

const Prop1 = ({ houses, owner }) => {
    return (
        <div>
            Prop1
            <Prop2 houses={houses} owner={owner} />
        </div>
    )
}

export default Prop1
