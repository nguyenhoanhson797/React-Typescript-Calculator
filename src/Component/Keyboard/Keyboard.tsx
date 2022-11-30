// import { useState, useEffect, useRef } from "react";
import { ReactComponent as Clear1Icon } from '../../icon/clear1.svg'
import { ReactComponent as EqualIcon } from '../../icon/equals.svg'
import { ReactComponent as PlusIcon } from '../../icon/plus.svg'
import { ReactComponent as MinusIcon } from '../../icon/minus.svg'
import { ReactComponent as MultiplyIcon } from '../../icon/multi.svg'
import { ReactComponent as DivideIcon } from '../../icon/divide.svg'
import styles from './Keyboard.module.css'
import { useState, useEffect, useRef } from 'react'
import { HistoryItem } from '../History/history.interface'
import { DispatchAction, MouseEventTarget } from '../../interfaces'

interface IProps {
    input: string[]
    result: number
    error: boolean
    show: boolean
    save: boolean
    focus: boolean
    history: HistoryItem[]
    setInput: DispatchAction<string[]>
    setResult: DispatchAction<number>
    setError: DispatchAction<boolean>
    setShow: DispatchAction<boolean>
    setSave: DispatchAction<boolean>
    setFocus: DispatchAction<boolean>
    setHistory: DispatchAction<HistoryItem[]>
    setHistoryList: DispatchAction<HistoryItem[]>
}

enum ElementType {
    ButtonType = 'data-btntype',
    Number = 'number',
    CalculateMethod = 'cal',
    ClearOneChar = 'clear1',
    CleanAll = 'clean',
    Reset = 'reset',
    Equal = 'equal',
}

enum KeyboardKeyName {
    Enter = 'Enter',
    Backspace = 'Backspace',
    Delete = 'Delete',
    Escape = 'Escape',
    History = 'h',
    Reset = 'r',
}

function Keyboard({ input, setInput, result, setResult, error, setError, show, setShow, save, setSave, setHistory, history, setHistoryList, focus, setFocus } : IProps) {
    const [newInput, setNewInput] = useState<boolean>(false);

//// __________________________________________________________________________________________________
    // TODO Calculate handle
    const handleClick = (e : MouseEventTarget) : void => {

        const event = (e.target as HTMLButtonElement)
        
        switch(true){
            case event.getAttribute(ElementType.ButtonType) === ElementType.Number:
                if (newInput){
                    setInput(input.splice(0,1))
                    setNewInput(false)
                    setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                    setSave(true)
                }
                if (error){
                    setInput([])
                    setError(false)
                }
                setInput([...input, event.value]) 
                break;

            case event.getAttribute(ElementType.ButtonType) === ElementType.CalculateMethod:
                if (newInput){
                    setInput([result.toString(), event.value])
                } else {
                    setInput([...input, event.value])
                }
                setNewInput(false)
                break;

            case event.id === ElementType.ClearOneChar:
                if (!newInput){
                    setInput(input.slice(0, input.length - 1))
                    setError(false)
                } else {
                    setNewInput(false)
                    setInput([])
                    setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                    setSave(true)
                    setResult(0)
                }
                break;
            
            case event.id === ElementType.CleanAll:
                if(newInput){
                    setInput([result.toString()])
                    setError(false)
                    setNewInput(false)
                } else {
                    setInput([])
                    setError(false)
                }
                break;

            case event.id === ElementType.Reset:
                setNewInput(false)
                setInput([])
                setResult(0)
                setError(false)
                setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                setSave(true)
                break;

            case event.id === ElementType.Equal:
                setResult(!input[0] ? 0 : eval(input.join('')));
                setInput([input.join('')])
                setNewInput(true)
                break;
        }
    }
    // TODO Calculate handle
//// __________________________________________________________________________________________________

    // Check if the result is valid
    const checkResult = (result === 0 || isNaN(result) || result === Infinity || result === undefined || result === null || typeof result === 'object')

    // ! Error Handle
    useEffect(() => {
        const errorHandle = () => {
            setError(true)
        }
        
        window.addEventListener('error', errorHandle)

        return () => {
            window.removeEventListener('error', errorHandle)
        }
    }, [])
    // ! Error Handle

    // TODO History handle
    useEffect(() => {
        if(save){
            // TODO Save to local storage
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('historyList', jsonHistory)
            // TODO Save to local storage

            setSave(false)
        }
    }, [save])
    // TODO History handlef

//// __________________________________________________________________________________________________
    // TODO Key pressed handle
    // Focus for key press
    const ref  = useRef<null | HTMLDivElement>(null)
    useEffect(() => {
        ref.current?.focus()
        setFocus(true)

        const keypressListener = (e : MouseEvent) :void => {
            const event = (e.target as Element)

            if (event.nodeName === 'INPUT'){        
            } else {
                ref.current?.focus()
                setFocus(true)
            }
        }

        window.addEventListener('click', keypressListener)

        return () => {
            window.removeEventListener('click', keypressListener)
        }
    } ,[focus])

    // Logic handle
    const handleKeyPressed = (e : React.KeyboardEvent<HTMLDivElement>) :void => {
        const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
        const calMethodArray = ['+', '-', '*', '/']
        setFocus(true)

        // * Press Enter to calculate (equal)
        if (e.key === KeyboardKeyName.Enter) {
            setResult(!input[0] ? 0 : eval(input.join('')));
            setInput([input.join('')])
            setNewInput(true)
        }

        // * Press number
        if(numberArray.includes(e.key)){
            if (newInput){
                setInput(input.splice(0,1))
                setNewInput(false)
                setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                setSave(true)
            }
            if (error){
                setInput([])
                setError(false)
            }
            setInput([...input, e.key])
        }
        
        // * Press calculate method
        if(calMethodArray.includes(e.key)){
            if (newInput){
                setInput([result.toString(), e.key])
            } else {
                setInput([...input, e.key])
            }
            setNewInput(false)
        }

        //* Press Backspace to delete 1 character 
        if(e.key === KeyboardKeyName.Backspace){
            if (!newInput){
                setInput(input.slice(0, input.length - 1))
                setError(false)
            } else {
                setNewInput(false)
                setInput([])
                setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                setSave(true)
                setResult(0)
            }
        }

        //* Press Delete to clean all and forward previous result
        if(e.key === KeyboardKeyName.Delete){
            if(newInput){
                setInput([result.toString()])
                setError(false)
                setNewInput(false)
            } else {
                setInput([])
                setError(false)
            }
        }

        //* Press Esc to return from history
        if(e.key === KeyboardKeyName.Escape){
            setShow(false)
        }

        //* Press H to toggle history
        if(e.key === KeyboardKeyName.History){
            const storageHistoryList = localStorage.getItem('historyList');
            setHistoryList(storageHistoryList ? JSON.parse(storageHistoryList) : [])
            setSave(true)
            setShow(!show)
        }

        //* Press R to Reset
        if(e.key === KeyboardKeyName.Reset){
            setNewInput(false)
            setInput([])
            setResult(0)
            setError(false)
            setHistory(checkResult ? history : [...history, {result: result, note: ''}])
            setSave(true)
        }
    }
    // Logic handle
    // TODO Key pressed handle
//// __________________________________________________________________________________________________
 

    return (
        <div ref={ref} className={styles.keyboard} onClick={handleClick} onKeyDown={handleKeyPressed} tabIndex={0}>
            <div className={styles.row}>
                <button id="reset"> Reset </button>
                <button id="clean"> C </button>
                <button id="clear1" className={styles.default}> <Clear1Icon/> </button>
                <button className={styles.cal} data-btntype='cal' value={'+'}> <PlusIcon/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'7'}> 7 </button>
                <button className={styles.number} data-btntype='number' value={'8'}> 8 </button>
                <button className={styles.number} data-btntype='number' value={'9'}> 9 </button>
                <button className={styles.cal} data-btntype='cal' value={'-'}> <MinusIcon/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'4'}> 4 </button>
                <button className={styles.number} data-btntype='number' value={'5'}> 5 </button>
                <button className={styles.number} data-btntype='number' value={'6'}> 6 </button>
                <button className={styles.cal} data-btntype='cal' value={'*'}> <MultiplyIcon/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'1'}> 1 </button>
                <button className={styles.number} data-btntype='number' value={'2'}> 2 </button>
                <button className={styles.number} data-btntype='number' value={'3'}> 3 </button>
                <button className={styles.cal} data-btntype='cal' value={'/'}> <DivideIcon/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'.'}> . </button>
                <button className={styles.number} data-btntype='number' value={'00'}> 00 </button>
                <button className={styles.number} data-btntype='number' value={'0'}> 0 </button>
                <button id="equal" className={styles.primary}> <EqualIcon/> </button>
            </div>
        </div>
    )
}

export default Keyboard;