import styles from './Popup.module.css'
import EditPopup from './PopupType/EditPopup';
import ConfirmPopup from './PopupType/ConfirmPopup';
import { HistoryItem } from '../History/history.interface';
import { DispatchAction } from '../../interfaces';

interface IProps {
    history: HistoryItem[]
    showPopup: boolean
    show: boolean
    popupType: string
    itemIndex: number
    setHistoryList: DispatchAction<HistoryItem[]>
    setHistory: DispatchAction<HistoryItem[]>
    setShowPopup: DispatchAction<boolean>
    setSave: DispatchAction<boolean>
    setFocus: DispatchAction<boolean>
}

export enum PopupTypeSignal {
    Edit = 'editPopup',
    Confirm = 'confirmPopup',
    DeleteAll = 'deleteAllPopup',
}

function Popup({ history, setHistoryList, showPopup, popupType, show, setShowPopup, setSave, itemIndex, setFocus, setHistory } : IProps){
    

    return(
        <div className={`${styles.popup} ${show && showPopup ? styles.show : styles.hide}`}>
            <EditPopup
                popupType={popupType}
                setShowPopup={setShowPopup}
                history={history}
                setHistoryList={setHistoryList}
                setSave={setSave}
                itemIndex={itemIndex}
                setFocus={setFocus}
            />
            <ConfirmPopup
                popupType={popupType}
                setShowPopup={setShowPopup}
                history={history}
                setHistoryList={setHistoryList}
                setSave={setSave}
                itemIndex={itemIndex}
                setFocus={setFocus}
                setHistory={setHistory}
            />
        </div>
    )
}

export default Popup;