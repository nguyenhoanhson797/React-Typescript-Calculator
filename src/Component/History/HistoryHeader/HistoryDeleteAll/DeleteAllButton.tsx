import { ReactComponent as DeleteAll } from '../../../../icon/delete.svg'
import styles from './DeleteAllButton.module.css'
import { EState } from '../../../../interfaces'

function DeleteAllButton({setShowPopup, setPopupType} : {setShowPopup : EState["setStateBoolean"], setPopupType : EState["setStateString"]}){

    // TODO Delete all history
    const handleTrash = () => {
        setShowPopup(true)
        setPopupType('deleteAllPopup')
    }

    return(
        <div className={styles.trash} onClick={handleTrash}>
            <DeleteAll/>
        </div>
    )
}

export default DeleteAllButton;