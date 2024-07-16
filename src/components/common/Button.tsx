import { PropsWithChildren } from "react"
import styles from "./Button.module.css"
import cn from "classnames"

interface ButtonProps {
    onClick?: () => void
    className?: String
}

function Button({ children, onClick, className }: PropsWithChildren<ButtonProps>) {
    return <div className={cn(styles.button, className)} onClick={onClick}>
        {children}
    </div>
}

export default Button;