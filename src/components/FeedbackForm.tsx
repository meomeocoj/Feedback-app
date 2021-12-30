import Card from './shared/Card'
import React, { ChangeEvent , useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState<number>(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState<string|null>('')

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        } 
    },[feedbackEdit])

    const handleTextChange = (e:ChangeEvent<HTMLInputElement>) : void => {
        const {target:{value}} = e

        if(value === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(value !== '' && value.trim().length < 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e:React.SyntheticEvent) :void => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us? </h2>
                    <RatingSelect select={(rating:number) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                        <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                    </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
