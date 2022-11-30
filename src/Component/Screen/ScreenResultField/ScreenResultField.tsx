import styles from './ScreenResultField.module.css'



function ScreenResult({ result } : {result : number}){

    return(
        <div className={styles.numberContainer}> 
            <p className={styles.result}>
                {result}
            </p>
        </div>
    )
}

export default ScreenResult;