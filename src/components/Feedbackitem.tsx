import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
interface FeedbackitemProps{
    item:{
        id:number,
        rating: number,
        text:string
    },
    handleDelete:Function
}

const Feedbackitem = ({item, handleDelete}:Required<FeedbackitemProps>) => {
    const {editFeedback} = useContext(FeedbackContext)
    // event handle
    return (
        <>
            <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button className="edit">
                <FaEdit color='purple'onClick={() => editFeedback(item)}/>
            </button>          
            <div className="text-display">
                {item.text}
            </div>
            </Card>
        </>
     
    )
} 

export default Feedbackitem
