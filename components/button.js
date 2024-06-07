import styles from "../styles/button.module.css"

export default function Button({onClick}) {
    return (
        <>
         <button onClick={onClick} className={styles.button}>Précommander</button> 
        </>
      );
}

