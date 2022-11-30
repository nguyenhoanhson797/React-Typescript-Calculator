import styles from './EditPopup.module.css'
import { useEffect, useState } from 'react'
import { EState } from '../../../interfaces'

interface IProps {
    history: EState["historyList"]
    popupType: string
    itemIndex: number
    setHistoryList: EState["setHistoryState"]
    setShowPopup: EState["setStateBoolean"]
    setSave: EState["setStateBoolean"]
    setFocus: EState["setStateBoolean"]
}

function EditPopup({ history, setHistoryList, popupType, setShowPopup, setSave, itemIndex, setFocus } : IProps){
    const [editResultValue, setEditResultValue] = useState<string>('')
    const [editNoteValue, setEditNoteValue] = useState<string>('')
    
    // Get Result edit value
    const handleEditResult = (e : EState["eventTarget"]) : void => {    
        setEditResultValue((e.target as HTMLInputElement).value);
    }

    // Get Note edit value
    const handleEditNote = (e : EState["eventTarget"]) : void => {
        setEditNoteValue((e.target as HTMLInputElement).value);
    }

    // TODO Handle save edit
    const handleSave = () => {

        // -----------------------------------------------------------------------------

        if(editResultValue && !isNaN(+editResultValue)){
            history[itemIndex].result = +editResultValue
            setHistoryList(history)
            setSave(true)
            setShowPopup(false)
            setFocus(true)
        }

        if(editNoteValue){
            history[itemIndex].note = editNoteValue
            setHistoryList(history)
            setSave(true)
            setShowPopup(false)
            setFocus(true)
        }

        // --------------------------------------------------------------------------------

        setEditResultValue('')
        setEditNoteValue('')
    }

    // TODO Handle cancel
    const handleCancel = () => {
        setShowPopup(false)
        setFocus(true)
        setEditResultValue('')
        setEditNoteValue('')
    }

    return(
        <div className={`${styles.editPopup} ${popupType === 'editPopup' ? styles.show : styles.hide}`}>
            <div className={styles.title}> Edit item </div>
            <input id='editResultInput' type="number" className={`${styles.editBox} ${styles.resultBox}`} placeholder='Edit Result' onChange={handleEditResult} autoComplete="off" value={editResultValue}/>
            <input id='editNoteInput' className={`${styles.editBox} ${styles.noteBox}`} placeholder='Edit Note' onChange={handleEditNote} autoComplete="off" value={editNoteValue}/>
            <div className={styles.btnField}>
                <button className={`${styles.button} ${styles.save}`} onClick={handleSave}> Save </button>
                <button className={`${styles.button} ${styles.cancel}`} onClick={handleCancel}> Cancel </button>
            </div>
        </div>
    )
}

export default EditPopup;