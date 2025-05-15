import styles from "./Input.module.css"

interface InputProps{
    label: string
    type: string
    value: string
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void; 
    placeholder: string;
}
const Input = ( { label, type, value, onChange, placeholder}: InputProps)=>{
    return(
        <div>
            <div>{label}</div>
            <div className={styles.inputBox}>
                <input 
                 type={type}
                 value={value}
                 onChange={onChange}
                 placeholder={placeholder}
                 className={styles.input}/>
            </div>
         </div>
    )
}