import {ReactComponent as Edit} from '../../../../icon/edit.svg'
import { DispatchAction } from '../../../../interfaces'
import { PopupTypeSignal } from '../../../Popup/Popup'

interface IProps { 
    index: number
    setItemIndex: DispatchAction<number>
    setShowPopup: DispatchAction<boolean>
    setPopupType: DispatchAction<string>
}

function HistoryEditButton ({ index, setShowPopup, setPopupType, setItemIndex } : IProps) {

    // TODO Send edit history item event
    const handleEdit = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShowPopup(true)
        setPopupType(PopupTypeSignal.Edit)
        setItemIndex(parseInt((e.target as HTMLDivElement).id.substr(4)))
    }
    // TODO Send edit history item event

    return(
        <div id={`edit${index}`} onClick={handleEdit}  className='editButton'> <Edit/> </div>
    )
}

export default HistoryEditButton