import HistoryItems from "./HistoryListLeftItems/HistoryItems";
import HistoryNote from "./HistoryListLeftItems/HistoryNote";
import HistoryDeleteOneItem from "./HistoryListRightItems/HistoryDeleteOneItem";
import HistoryEditButton from "./HistoryListRightItems/HistoryEditButton";
import styles from './HistoryList.module.css'
import { DispatchAction } from "../../../interfaces";
import { HistoryItem } from "../history.interface";

interface IProps { 
    showPopup: boolean
    setItemIndex: DispatchAction<number>
    setShowPopup: DispatchAction<boolean>
    setPopupType: DispatchAction<string>
    historyList: HistoryItem[]
}

function HistoryList({ historyList, showPopup, setShowPopup, setPopupType, setItemIndex} : IProps){

    
    return(
        <div className={`${styles.historyList} ${showPopup ? styles.popup : ''}`}>
            <ul>
                {
                    historyList.map((value : {result: number, note: string}, index : number) => {
                        return (
                            <li className={styles.itemList} key={index} id={index.toString()}>
                                <div className={styles.historyListLeft}>
                                    <HistoryItems
                                        value={value.result}
                                        index={index}
                                    />
                                    <HistoryNote
                                        value={value.note}
                                        index={index}
                                    />
                                </div>

                                <div className={styles.historyListRight}>
                                    <HistoryEditButton
                                        index={index}                           
                                        setShowPopup={setShowPopup}
                                        setPopupType={setPopupType}       
                                        setItemIndex={setItemIndex}
                                    />
                                    <HistoryDeleteOneItem
                                        index={index}                           
                                        setShowPopup={setShowPopup}
                                        setPopupType={setPopupType}
                                        setItemIndex={setItemIndex}
                                    />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HistoryList;