import styles from './HistoryNote.module.css'

function HistoryNote({ index, value } : {index : number , value : string}){


    return(
        <div className={styles.historyNote}>
            <p style={{marginRight: '4px'}}>Note: </p>
            <input className={`note${index}`} value={value} readOnly/>
        </div>
    )
}

export default HistoryNote;