import React from 'react'

interface HeaderProps{
    text:string,
    bgColor: string,
    textColor:string
}

const Header = ({text,bgColor, textColor}:HeaderProps) => {
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps ={
    text:"Feedback App",
    bgColor:'rgb(0,0,0,0.4)',
    textColor:'#ff6a95'
}

export default Header
