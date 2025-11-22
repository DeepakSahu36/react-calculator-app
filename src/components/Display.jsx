import styles from "./Display.module.css"
function Display({textToShow}){
  return (
         <input type="text" className={styles.display} value={textToShow} readOnly/>
  )
}

export default Display