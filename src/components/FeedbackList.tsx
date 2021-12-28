import React from 'react'
import FeedbackItem from './Feedbackitem'
import {motion, AnimatePresence} from 'framer-motion'
interface FeedbackProps{
    feedback:Array<{
        id: number,
        rating: number,
        text:string
    }>
    handleDelete: Function
}

const FeedbackList = ({feedback, handleDelete}:Required<FeedbackProps>) => {
    if(!feedback || feedback.length === 0){
        return (<p>There are no feedback</p>)
    }
    // return (
    //     <div>
    //         {feedback.map(item => {
    //             return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //         })}
            
    //     </div>
    // )
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map(item => {
                return (
                <motion.div 
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}>
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                </motion.div>
                )
            })}
            </AnimatePresence>
           
        </div>
    )
}

export default FeedbackList
