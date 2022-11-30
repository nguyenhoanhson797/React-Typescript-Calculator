import styles from "./History.module.css";
import HistoryHeader from "./HistoryHeader/HistoryHeader"
import HistoryList from "./HistoryList/HistoryList"
import { EState } from '../../interfaces'

interface IProps {
    show: boolean
    showPopup: boolean
    setItemIndex: EState["setStateNumber"]
    setShow: EState["setStateBoolean"]
    setFocus: EState["setStateBoolean"]
    setShowPopup: EState["setStateBoolean"]
    setPopupType: EState["setStateString"]
    historyList: EState["historyList"]
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