import { ReactComponent as DeleteAll } from '../../../../icon/delete.svg'
import { DispatchAction } from '../../../../interfaces'
import { PopupTypeSignal } from '../../../Popup/Popup'
import styles from './DeleteAllButton.module.css'

interface IProps {
    setShowPopup : DispatchAction<boolean>,
    setPopupType : DispatchAction<string>,
}

function DeleteAllButton({setShowPopup, setPopupType} : IProps){

    // TODO Delete all history
    const handleTrash = () => {
        setShowPopup(true)
        setPopupType(PopupTypeSignal.DeleteAll)
    }

    return(
        <div className={styles.trash} onClick={handleTrash}>
            <DeleteAll/>
        </div>
    )
}

export default DeleteAllButton;