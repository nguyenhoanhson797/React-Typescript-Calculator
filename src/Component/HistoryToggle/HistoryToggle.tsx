import styles from './HistoryToggle.module.css'
import { ReactComponent as Historyico } from '../../icon/history.svg'
import { EState } from '../../interfaces'

interface IProps {
    show: boolean
    setShow: EState['setStateBoolean']
    setSave: EState['setStateBoolean']
    setHistoryList: EState['setHistoryState']
    setFocus: EState['setStateBoolean']
}


function HistoryToggle({ show , setShow, setSave, setHistoryList, setFocus }: IProps){

    const toggleHistory = () : void => {
        const storageHistoryList = localStorage.getItem('historyList');
        setHistoryList(storageHistoryList ? JSON.parse(storageHistoryList) : [])
        setSave(true)
        setShow(!show)
        setFocus(true)
    }

    return(
        <div className={styles.historyShow} onClick={toggleHistory}>
            <Historyico />
        </div>
    )
}

export default HistoryToggle;

