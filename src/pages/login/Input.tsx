import styles from "./Input.module.css"

interface InputProps{
    label: string
    type: string
    name: string
    value: string
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void; 
    placeholder: string;
    onClick?: () => void; // ✅ 버튼 클릭 이벤트
    buttonText?: string; // ✅ 버튼에 보여줄 텍스트
}
const Input = ( { label, type, name, value, onChange, placeholder, onClick, buttonText }: InputProps)=>{
    return(
        <div>
            <div>{label}</div>
            <div className={styles.inputBox}>
                <input 
                 type={type}
                 name={name}
                 value={value}
                 onChange={onChange}
                 placeholder={placeholder}
                 className={styles.input}
                />
                {onClick &&(
                <div className={styles.check} onClick={onClick}>
                    {buttonText || "확인"} {/* ✅ 기본은 '확인', 없으면 기본값 사용 */}
                </div>
                )}
            </div>
         </div>
    )
}

export default Input;