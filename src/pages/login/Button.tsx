import styles from "./Button.module.css"

interface ButtonProps{
    label: string
    onClick: ()=> void
}

const Button =({label, onClick}: ButtonProps)=>{
    return(
        <div className={styles.button} onClick={onClick}>{label}</div>
    )
}

export default Button;