import './App.css';
import Screen from './Component/Screen/Screen';
import Keyboard from './Component/Keyboard/Keyboard';
import Header from './Component/Header/Header';
import BlurLayout from './Component/BlurLayout/BlurLayout';
import History from './Component/History/History';
import HistoryToggle from './Component/HistoryToggle/HistoryToggle';
import Popup from './Component/Popup/Popup';
import { useState, useEffect } from 'react'
import { HistoryItem } from './Component/History/history.interface';

export enum LocalHistoryList {
  Key = 'historyList'
}

function App() {
  
  const getLocalItems = () : HistoryItem[] => {
    const storageHistoryList = localStorage.getItem(LocalHistoryList.Key);
    let refineHistoryList : HistoryItem[]

    if (storageHistoryList){
      refineHistoryList = JSON.parse(storageHistoryList)
    } else {
      refineHistoryList = []
    }

    return refineHistoryList;
  }

  const [show, setShow] = useState<boolean>(false);                    // show history screen
  const [showPopup, setShowPopup] = useState<boolean>(false);          // show pop-up
  const [popupType, setPopupType] = useState<string>('');              // Call pop-up type
  const [input, setInput] = useState<string[]>([]);                    // set input field
  const [result, setResult] = useState<number>(0);                     // set result field
  const [error, setError] = useState<boolean>(false);                  // catch error
  const [save, setSave] = useState<boolean>(false);                    // set save state
  const [focus, setFocus] = useState<boolean>(false);                  // set active state for keyboard pressing
  const [itemIndex, setItemIndex] = useState<number>(0);               // set index of curent selected item
  const [history, setHistory] = useState(getLocalItems());             // TODO set list of history for saving to local storage
  const [historyList, setHistoryList] = useState(getLocalItems());     // TODO get list of history from local storage

  //Keep focus state active for keypress
  useEffect(() : void => {
    setFocus(false)
  }, [focus])

  // History handle
  useEffect(() : void => {
    if(save){
        // TODO Save to local storage
        const jsonHistory : string = JSON.stringify(history)
        localStorage.setItem('historyList', jsonHistory)
        // TODO Save to local storage

        setSave(false)
    }
  }, [save])
  // History handle

  return (
      <div className='main-container'>
        <HistoryToggle 
          show={show}
          setShow={setShow}
          setSave={setSave}
          setHistoryList={setHistoryList}
          setFocus={setFocus}
        />

        <div className='top'>
          <Header />
          <Screen 
            input={input}
            result={result}
            error={error}
          />
        </div>

        <Keyboard
          save={save}
          setSave={setSave}
          input={input}
          setInput={setInput}
          result={result}
          setResult={setResult}
          error={error}
          setError={setError}
          show={show}
          setShow={setShow}
          history={history}
          setHistory={setHistory}
          setHistoryList={setHistoryList}
          focus={focus}
          setFocus={setFocus}
        />

        <BlurLayout 
          show={show}
        />

        <Popup 
          showPopup={showPopup}
          popupType={popupType}
          show={show}
          setShowPopup={setShowPopup}
          history={history}
          setHistoryList={setHistoryList}
          setSave={setSave}
          itemIndex={itemIndex}
          setFocus={setFocus}
          setHistory={setHistory}
        />

        <History
          show={show}
          setShow={setShow}
          historyList={historyList}
          setFocus={setFocus}
          setShowPopup={setShowPopup}
          setPopupType={setPopupType}
          showPopup={showPopup}
          setItemIndex={setItemIndex}
        />
      </div>
  )
}


export default App;
