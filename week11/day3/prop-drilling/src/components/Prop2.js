import React from 'react'
import Prop3 from './Prop3'

const Prop2 = ({ houses, owner }) => {
    return (
        <div>
            Prop2
            <Prop3 houses={houses} owner={owner} />
        </div>
    )
}

export default Prop2
