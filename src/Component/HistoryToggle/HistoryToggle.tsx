import styles from './HistoryToggle.module.css'
import { ReactComponent as Historyicon } from '../../icon/history.svg'
import { DispatchAction } from '../../interfaces'
import { HistoryItem } from '../History/history.interface'
import { LocalHistoryList } from '../../App'

interface IProps {
    show: boolean
    setShow: DispatchAction<boolean>
    setSave: DispatchAction<boolean>
    setHistoryList: DispatchAction<HistoryItem[]>
    setFocus: DispatchAction<boolean>
}

function HistoryToggle({ show , setShow, setSave, setHistoryList, setFocus }: IProps){

    const toggleHistory = () : void => {
        const storageHistoryList = localStorage.getItem(LocalHistoryList.Key);
        setHistoryList(storageHistoryList ? JSON.parse(storageHistoryList) : [])
        setSave(true)
        setShow(!show)
        setFocus(true)
    }

    return(
        <div className={styles.historyShow} onClick={toggleHistory}>
            <Historyicon />
        </div>
    )
}

export default HistoryToggle;

