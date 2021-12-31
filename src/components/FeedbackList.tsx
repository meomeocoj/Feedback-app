import FeedbackItem from './Feedbackitem'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'
const FeedbackList = () => {
    const {feedback,deleteFeedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return (<p>There are no feedback</p>)
    }
    // return (
    //     <div>
    //         {feedback.map(item => {
    //             return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //         })}
            
    //     </div>
    // )
    return isLoading ? <Spinner/>:(
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map(item => {
                return (
                <motion.div 
                    key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}>
                <FeedbackItem key={item.id} item={item} handleDelete={deleteFeedback} />
                </motion.div>
                )
            })}
            </AnimatePresence>
           
        </div>
    )
}

export default FeedbackList
