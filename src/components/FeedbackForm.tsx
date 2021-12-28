import Card from './shared/Card'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

interface FeedbackFormProps{
    handleAdd:Function
}
const FeedbackForm = ({handleAdd}:FeedbackFormProps) => {
    const [text, setText] = useState<string>('')
    const [rating, setRating] = useState<number>(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState<string|null>('')
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
            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us? </h2>
                    <RatingSelect select={(rating:number) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleTextChange} type="text" placeholder='Write a review' />
                        <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                    </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
