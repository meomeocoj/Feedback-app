import React from 'react'
interface Props{
    feedback:Array<{
        id: number,
        rating:number,
        text:string
    }>
}
const FeedbackStats = ({feedback}:Props) => {
    let average:any = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    },0) / feedback.length | 0.0
 
    average = average.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length } Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    )
}

export default FeedbackStats
