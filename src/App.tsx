import React from 'react'

const App = () => {
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id:1, txt:"Comment1"},
        {id:2, txt:"Comment2"},
        {id:3, txt:"Comment3"},
    ]
    const loading = false
    const showComment = true
    const commentBlock = (
            <div className="comments">
                <h3>Comments: {comments.length}</h3>
                <ul>
                    {comments.map((comment,index) => (<li key={index}>
                        {comment.txt}
                    </li>))}
                </ul>
            </div>
    )

    if(loading) return (<h1>Loading...</h1>)

    return (
        <div className="class">
            <h1>{title}</h1>
            <p>{body}</p>
            
            {showComment ? commentBlock:""}
            
        </div>
    )
}

export default App
