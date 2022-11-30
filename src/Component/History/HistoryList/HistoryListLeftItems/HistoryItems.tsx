import styles from './HistoryItems.module.css'

function HistoryItems ({ index, value } : {index: number, value : number}) {


    return(
        <p className={`${styles.historyItem} item-${index}`}> {value} </p>
    )
}

export default HistoryItems;