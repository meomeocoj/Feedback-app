import React, { useState } from 'react'
import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'
interface FeedbackitemProps{
    item:{
        id:number,
        rating: number,
        text:string
    },
    handleDelete:Function
}

const Feedbackitem = ({item, handleDelete}:Required<FeedbackitemProps>) => {
    
    // event handle
    const handleClick = (id:number) => {

    }
    return (
        <>
            <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>          
            <div className="text-display">
                {item.text}
            </div>
            </Card>
        </>
     
    )
} 

export default Feedbackitem
