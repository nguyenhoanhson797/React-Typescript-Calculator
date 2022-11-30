import {ReactComponent as Delete1} from '../../../../icon/backspace.svg'
import { EState } from '../../../../interfaces'

interface IProps { 
    index: number
    setItemIndex: EState["setStateNumber"]
    setShowPopup: EState["setStateBoolean"]
    setPopupType: EState["setStateString"]
}

function HistoryDeleteOneItem ({ index, setShowPopup, setPopupType, setItemIndex } : IProps) {

    // TODO Send delete 1 history item event
    const handleDelete1 = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShowPopup(true)
        setPopupType('confirmPopup')
        setItemIndex(parseInt((e.target as HTMLDivElement).id.substr(6)))
    }
    // TODO Send delete 1 history item event

    return(
        <div id={`delete${index}`} onClick={handleDelete1} className='delete1'> <Delete1/> </div>
    )
}

export default HistoryDeleteOneItem