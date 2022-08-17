import React from 'react'

const Prop5 = ({ houses, owner }) => {
    return (
        <div>
            {houses.map(house => {
                return <h1>{house.name}</h1>
            })}
            <h1>{owner.name}</h1>
            Prop5
        </div>
    )
}

export default Prop5
