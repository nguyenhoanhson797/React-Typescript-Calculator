import styles from './ScreenInputField.module.css'

function ScreenInput({input} : {input : string[]}){

    return(
        <div className={styles.numberContainer}> 
            <p className={styles.showField}>
                {input}
            </p>
        </div>
    )
}

export default ScreenInput;