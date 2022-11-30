import {ReactComponent as Edit} from '../../../../icon/edit.svg'
import { EState } from '../../../../interfaces'

interface IProps { 
    index: number
    setItemIndex: EState["setStateNumber"]
    setShowPopup: EState["setStateBoolean"]
    setPopupType: EState["setStateString"]
}

function HistoryEditButton ({ index, setShowPopup, setPopupType, setItemIndex } : IProps) {

    // TODO Send edit history item event
    const handleEdit = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShowPopup(true)
        setPopupType('editPopup')
        setItemIndex(parseInt((e.target as HTMLDivElement).id.substr(4)))
    }
    // TODO Send edit history item event

    return(
        <div id={`edit${index}`} onClick={handleEdit}  className='editButton'> <Edit/> </div>
    )
}

export default HistoryEditButton