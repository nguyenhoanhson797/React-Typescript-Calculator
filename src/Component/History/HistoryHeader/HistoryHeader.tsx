
import ReturnButton from './HistoryHeaderLeftItems/ReturnButton'
import DeleteAllButton from './HistoryDeleteAll/DeleteAllButton'
import HistoryTitle from './HistoryHeaderLeftItems/HistoryTitle'
import styles from './HistoryHeader.module.css'
import { DispatchAction } from '../../../interfaces'

interface IProps {
    setShow: DispatchAction<boolean>
    setFocus: DispatchAction<boolean>
    setShowPopup: DispatchAction<boolean>
    setPopupType: DispatchAction<string>
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