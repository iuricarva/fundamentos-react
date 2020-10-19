import React from 'react'

export default props => {
    const {min,max} = props
    const result = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <p>O resultado aleatório é: {result}.</p>
        </div>
    )
}