 import styles from "./Button.module.css"
function Button({btnName,handleButton}){
  return(
   <button className={styles.btn} onClick={()=>handleButton(btnName)}>{btnName}</button>
  )
}

export default Button