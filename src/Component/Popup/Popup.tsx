import styles from './Popup.module.css'
import EditPopup from './PopupType/EditPopup';
import ConfirmPopup from './PopupType/ConfirmPopup';
import { EState } from '../../interfaces'

interface IProps {
    history: EState["historyList"]
    showPopup: boolean
    show: boolean
    popupType: string
    itemIndex: number
    setHistoryList: EState["setHistoryState"]
    setHistory: EState["setHistoryState"]
    setShowPopup: EState["setStateBoolean"]
    setSave: EState["setStateBoolean"]
    setFocus: EState["setStateBoolean"]
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