import styles from './ScreenInputField.module.css'

type PropsType = {input : string[]}

function ScreenInput({input} : PropsType){

    return(
        <div className={styles.numberContainer}> 
            <p className={styles.showField}>
                {input}
            </p>
        </div>
    )
}

export default ScreenInput;