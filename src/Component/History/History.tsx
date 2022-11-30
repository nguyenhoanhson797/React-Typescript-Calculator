import styles from "./History.module.css";
import HistoryHeader from "./HistoryHeader/HistoryHeader"
import HistoryList from "./HistoryList/HistoryList"
import { DispatchAction } from '../../interfaces'
import { HistoryItem } from "./history.interface"

interface IProps {
    show: boolean
    showPopup: boolean
    setItemIndex: DispatchAction<number>
    setShow: DispatchAction<boolean>
    setFocus: DispatchAction<boolean>
    setShowPopup: DispatchAction<boolean>
    setPopupType: DispatchAction<string>
    historyList: HistoryItem[]
}

function History({ setItemIndex, show, setShow, historyList, setFocus, showPopup, setShowPopup, setPopupType } : IProps){


    return(
        <div
            className={`
                ${styles.historyField}
                ${show ? styles.show : styles.hide}
                ${show && showPopup ? styles.popup : ''}
            `}
        >
            <HistoryHeader
                setShow={setShow}
                setFocus={setFocus}
                setShowPopup={setShowPopup}
                setPopupType={setPopupType}
            />
            <HistoryList
                historyList={historyList}
                setShowPopup={setShowPopup}
                setPopupType={setPopupType}
                setItemIndex={setItemIndex}
                showPopup={showPopup}
            />
        </div>
    )
}

export default History;