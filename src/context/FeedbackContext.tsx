import { m } from "framer-motion";
import  { createContext, ReactNode, useState, useEffect } from "react";

export interface IFeedback{
    id:number,
    rating:number,
    text:string
}

interface FeedbackProviderProps{
    children: ReactNode
}
interface IFeedbackEdit{
    item:IFeedback,
    edit:boolean
}
interface FeedbackContextProps{
    feedback:IFeedback[]
    feedbackEdit:IFeedbackEdit
    isLoading:boolean
    setFeedback:Function
    deleteFeedback:Function
    addFeedback: Function
    editFeedback:Function
    updateFeedback:Function
}


const FeedbackContext = createContext<FeedbackContextProps>({} as FeedbackContextProps)

export const FeedbackProvider = ({children}: FeedbackProviderProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([] as IFeedback[]);

    const [feedbackEdit, setFeedbackEdit] = useState({} as IFeedbackEdit)

    useEffect(()=>{
        fetchFeedback()
    },[])

    // Get the feedback data from back and

    const fetchFeedback = async ()=>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //Add feedback 
    const addFeedback = async (newFeedback:IFeedback) => {
        const response = await fetch(`/feedback`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        })        
        const data = await response.json()

        setFeedback([...feedback,data])
    }
    // Delete feedback
    const deleteFeedback = async (id:number) => {
        if(window.confirm('Are you sure you want to delete')){
            await fetch(`/feedback/${id}`, {method:'DELETE'})
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Edit feedback
    const editFeedback = (item:IFeedback) => {
        setFeedbackEdit({item,edit:true})
    }

    // Update feedback item
    const updateFeedback = async (id:number, updateItem:IFeedback) =>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item) => item.id  === id ? {...item,...data}:item))
        
        setFeedbackEdit({} as IFeedbackEdit)
    }
    
    return <FeedbackContext.Provider value={{feedback,isLoading,feedbackEdit,setFeedback,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>
                {children}
            </FeedbackContext.Provider>

}
export default FeedbackContext
