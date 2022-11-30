// import { useState, useEffect } from "react";
import styles from './ScreenInfoField.module.css'
import { useState, useEffect } from 'react'

type PropsType = {error : boolean}

function ScreenInfo({error} : PropsType){
    const [showError, setShowError] = useState<string>('')

    // ! Error handle
    useEffect(() : void => {
        if (error){
            setShowError('Error')
        } else {
            setShowError('')
        }
    }, [error])
    // ! Error handle

    return(
        <div className="screenInfo">
            <p className={styles.errorField}> {showError} </p>
        </div>
    )
}

export default ScreenInfo;