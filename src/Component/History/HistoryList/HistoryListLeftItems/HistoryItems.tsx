import styles from './HistoryItems.module.css'

interface IProps {
    index: number,
    value : number,
}

function HistoryItems ({ index, value } : IProps) {


    return(
        <p className={`${styles.historyItem} item-${index}`}>
            {value.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}
        </p>
    )
}

export default HistoryItems;