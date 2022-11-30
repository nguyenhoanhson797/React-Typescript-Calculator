import styles from './ScreenResultField.module.css'

type PropsType = {result : number}

function ScreenResult({ result } : PropsType){

    return(
        <div className={styles.numberContainer}> 
            <p className={styles.result}>
                {result.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}
            </p>
        </div>
    )
}

export default ScreenResult;