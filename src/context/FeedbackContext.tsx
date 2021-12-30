import  { createContext, ReactNode, useState } from "react";

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
    feedback:IFeedback[],
    feedbackEdit:IFeedbackEdit
    setFeedback:Function
    deleteFeedback:Function
    addFeedback: Function
    editFeedback:Function
    updateFeedback:Function
}


const FeedbackContext = createContext<FeedbackContextProps>({} as FeedbackContextProps)

export const FeedbackProvider = ({children}: FeedbackProviderProps) => {
    const [feedback, setFeedback] = useState([
         {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({} as IFeedbackEdit)

    //Add feedback 
    const addFeedback = (newFeedback:IFeedback) => {
        newFeedback.id = feedback.length + 1
        setFeedback([...feedback,newFeedback])
    }
    // Delete feedback
    const deleteFeedback = (id:number) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    // Edit feedback
    const editFeedback = (item:IFeedback) => {
        setFeedbackEdit({item,edit:true})
    }

    // Update feedback item
    const updateFeedback = (id:number, updateItem:IFeedback) =>{
        setFeedback(feedback.map((item) => item.id  === id ? {...item,...updateItem}:item))
        setFeedbackEdit({} as IFeedbackEdit)
    }
    
    return <FeedbackContext.Provider value={{feedback,feedbackEdit,setFeedback,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>
                {children}
            </FeedbackContext.Provider>

}
export default FeedbackContext
