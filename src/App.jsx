import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [displayText,setDisplayText] = useState('')
  
  const handleButtonClick = function(btnPress){
     if(btnPress === "C")
     {
      setDisplayText('')
     }else if(btnPress === "="){
        let total = eval(displayText)
        setDisplayText(total)
     }else{
      let newDisplay = displayText + btnPress
       setDisplayText(newDisplay)
     }

  }

  return (
    <div className={styles.calculator}>
      <Display textToShow={displayText}/>
      <ButtonsContainer handleButton={handleButtonClick}/>
    </div>
  );
}

export default App;
