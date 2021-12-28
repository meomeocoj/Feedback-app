import { ReactNode } from "react"

interface Props{
    children: ReactNode,
    version:string,
    type?:"button" | "submit" | "reset" | undefined,
    isDisabled:boolean
}

const Button = ({children, version, type, isDisabled}:Props) => {
    return (
            <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
                {children}
            </button>
    )
}

Button.defaultProps = {
    version:'primary',
    type:'button',
    isDisabled: false
}

export default Button
