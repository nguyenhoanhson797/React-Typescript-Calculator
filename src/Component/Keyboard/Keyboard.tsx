// import { useState, useEffect, useRef } from "react";
import { ReactComponent as Clear1 } from '../../icon/clear1.svg'
import { ReactComponent as Equal } from '../../icon/equals.svg'
import { ReactComponent as Plus } from '../../icon/plus.svg'
import { ReactComponent as Minus } from '../../icon/minus.svg'
import { ReactComponent as Multiply } from '../../icon/multi.svg'
import { ReactComponent as Divide } from '../../icon/divide.svg'
import styles from './Keyboard.module.css'
import { useState, useEffect, useRef } from 'react'
import { EState } from '../../interfaces'

interface IProps {
    input: string[]
    result: number
    error: boolean
    show: boolean
    save: boolean
    focus: boolean
    history: EState["historyList"]
    setInput: EState["setStateStringArray"]
    setResult: EState["setStateNumber"]
    setError: EState["setStateBoolean"]
    setShow: EState["setStateBoolean"]
    setSave: EState["setStateBoolean"]
    setFocus: EState["setStateBoolean"]
    setHistory: EState["setHistoryState"]
    setHistoryList: EState["setHistoryState"]
}

function Keyboard({ input, setInput, result, setResult, error, setError, show, setShow, save, setSave, setHistory, history, setHistoryList, focus, setFocus } : IProps) {
    const [newInput, setNewInput] = useState<boolean>(false);
    
    // TODO Calculate handle
    const handleClick = (e : EState["eventTarget"]) : void => {

        const event = (e.target as HTMLButtonElement)
        
        switch(true){
            case event.getAttribute('data-btntype') === 'number':
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

            case event.getAttribute('data-btntype') === 'cal':
                if (newInput){
                    setInput([result.toString(), event.value])
                } else {
                    setInput([...input, event.value])
                }
                setNewInput(false)
                break;

            case event.id === 'clear1':
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
            
            case event.id === 'clean':
                setInput([result.toString()])
                setError(false)
                break;

            case event.id === 'reset':
                setNewInput(false)
                setInput([])
                setResult(0)
                setError(false)
                setHistory(checkResult ? history : [...history, {result: result, note: ''}])
                setSave(true)
                break;

            case event.id === 'equal':
                setResult(eval(input.join('')));
                setInput([input.join('')])
                setNewInput(true)
                break;
        }
    }
    // TODO Calculate handle

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
    // TODO History handle

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
        if (e.key === 'Enter') {
            setResult(eval(input.join('')));
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
        if(e.key === 'Backspace'){
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
        if(e.key === 'Delete'){
            setInput([result.toString()])
            setError(false)
        }

        //* Press Esc to return from history
        if(e.key === 'Escape'){
            setShow(false)
        }

        //* Press H to toggle history
        if(e.key === 'h'){
            const storageHistoryList = localStorage.getItem('historyList');
            setHistoryList(storageHistoryList ? JSON.parse(storageHistoryList) : [])
            setSave(true)
            setShow(!show)
        }

        //* Press R to Reset
        if(e.key === 'r'){
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
 

    return (
        <div ref={ref} className={styles.keyboard} onClick={handleClick} onKeyDown={handleKeyPressed} tabIndex={0}>
            <div className={styles.row}>
                <button id="reset"> Reset </button>
                <button id="clean"> C </button>
                <button id="clear1" className={styles.default}> <Clear1/> </button>
                <button className={styles.cal} data-btntype='cal' value={'+'}> <Plus/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'7'}> 7 </button>
                <button className={styles.number} data-btntype='number' value={'8'}> 8 </button>
                <button className={styles.number} data-btntype='number' value={'9'}> 9 </button>
                <button className={styles.cal} data-btntype='cal' value={'-'}> <Minus/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'4'}> 4 </button>
                <button className={styles.number} data-btntype='number' value={'5'}> 5 </button>
                <button className={styles.number} data-btntype='number' value={'6'}> 6 </button>
                <button className={styles.cal} data-btntype='cal' value={'*'}> <Multiply/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'1'}> 1 </button>
                <button className={styles.number} data-btntype='number' value={'2'}> 2 </button>
                <button className={styles.number} data-btntype='number' value={'3'}> 3 </button>
                <button className={styles.cal} data-btntype='cal' value={'/'}> <Divide/> </button>
            </div>
            <div className={styles.row}>
                <button className={styles.number} data-btntype='number' value={'.'}> . </button>
                <button className={styles.number} data-btntype='number' value={'00'}> 00 </button>
                <button className={styles.number} data-btntype='number' value={'0'}> 0 </button>
                <button id="equal" className={styles.primary}> <Equal/> </button>
            </div>
        </div>
    )
}

export default Keyboard;