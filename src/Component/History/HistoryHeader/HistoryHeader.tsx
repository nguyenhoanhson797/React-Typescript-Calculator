
import ReturnButton from './HistoryHeaderLeftItems/ReturnButton'
import DeleteAllButton from './HistoryDeleteAll/DeleteAllButton'
import HistoryTitle from './HistoryHeaderLeftItems/HistoryTitle'
import styles from './HistoryHeader.module.css'
import { EState } from '../../../interfaces'

interface IProps {
    setShow: EState["setStateBoolean"]
    setFocus: EState["setStateBoolean"]
    setShowPopup: EState["setStateBoolean"]
    setPopupType: EState["setStateString"]
}


function HistoryHeader({ setShow, setFocus, setShowPopup, setPopupType } : IProps){


    return(
        <div className={styles.historyHeader}>
            <div className={styles.left}>
                <ReturnButton 
                    setShow={setShow}
                    setFocus={setFocus}
                />
                <HistoryTitle />
            </div>

            <DeleteAllButton 
                setShowPopup={setShowPopup}
                setPopupType={setPopupType}
            />
        </div>
    )
}

export default HistoryHeader;