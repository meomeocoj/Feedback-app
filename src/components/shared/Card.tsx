import React, { ReactNode } from 'react'
interface CardProps{
    children:ReactNode,
    reverse:boolean
}

const Card = ({children, reverse}:CardProps) => {
    
    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    children: null,
    reverse:false
}

export default Card
