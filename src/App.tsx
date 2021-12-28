import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { FeedBackData } from './data/FeedBackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/About'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
    const [feedback, setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id:number) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    const addFeedback = (newFeedback:{id:number, rating:number, text:string}) => {
        newFeedback.id = feedback.length+ 1
        setFeedback([...feedback,newFeedback])
    }
    return (
        <Router>
            <Header />
                <div className="container">
            <Routes>
            <Route path='/' element={
                <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback}/>
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage/>} />
            </Routes>
            <AboutIconLink/>
            </div>
        </Router>
    )
}

export default App
