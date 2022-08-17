import React from 'react'
import Prop4 from './Prop4'

const Prop3 = ({ houses, owner }) => {
    return (
        <div>
            Prop3 <Prop4 houses={houses} owner={owner} />
        </div>
    )
}

export default Prop3
