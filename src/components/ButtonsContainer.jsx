import Button from "./Button";
import styles from "./ButtonsContainer.module.css"

function ButtonsContainer() {
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={styles.buttonsContainer}>
    {buttonNames.map((name)=> <Button key={name} btnName={name}/>)}

    </div>
  );
}

export default ButtonsContainer;
