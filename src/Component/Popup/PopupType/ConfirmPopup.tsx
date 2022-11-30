import { DispatchAction } from '../../../interfaces'
import { HistoryItem } from '../../History/history.interface'
import { PopupTypeSignal } from '../Popup'
import styles from './ConfirmPopup.module.css'


interface IProps {
    history: HistoryItem[]
    popupType: string
    itemIndex: number
    setHistoryList: DispatchAction<HistoryItem[]>
    setHistory: DispatchAction<HistoryItem[]>
    setShowPopup: DispatchAction<boolean>
    setSave: DispatchAction<boolean>
    setFocus: DispatchAction<boolean>
}

function ConfirmPopup({ history, setHistoryList, popupType, setShowPopup, setSave, itemIndex, setFocus, setHistory } : IProps){

    // TODO handle delete 1 item
    const handleDeleteOneItem = () => {
        history.splice(itemIndex, 1)
        setHistoryList(history)
        setSave(true)
        setFocus(true)
        setShowPopup(false)
    }
    
    // TODO handle delete all items
    const handleDeleteAll = () => {
        setHistory([])
        setHistoryList([])
        setSave(true)
        setFocus(true)
        setShowPopup(false)
    }
    
    // TODO handle cancel
    const handleCancel = () => {
        setShowPopup(false)
    }

    

    return(
        <div>
            <div className={`${styles.confirmPopup} ${popupType === PopupTypeSignal.Confirm ? styles.show : styles.hide}`}>
                <div className={styles.title}> Delete this item? </div>
                <div className={styles.confirmField}>
                    <button className={`${styles.button} ${styles.delete}`} onClick={handleDeleteOneItem}> Delete </button>
                    <button className={`${styles.button} ${styles.cancel}`} onClick={handleCancel}> Cancel </button>
                </div>
            </div>

            <div className={`${styles.confirmPopup} ${popupType === PopupTypeSignal.DeleteAll ? styles.show : styles.hide}`}>
                <div className={styles.title}> Delete All Items? </div>
                <div className={styles.confirmField}>
                    <button className={`${styles.button} ${styles.delete}`} onClick={handleDeleteAll}> Delete All </button>
                    <button className={`${styles.button} ${styles.cancel}`} onClick={handleCancel}> Cancel </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopup;