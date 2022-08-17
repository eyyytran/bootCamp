import React from 'react'
import Prop5 from './Prop5'

const Prop4 = ({ houses, owner }) => {
    return (
        <div>
            Prop4 <Prop5 houses={houses} owner={owner} />
        </div>
    )
}

export default Prop4
