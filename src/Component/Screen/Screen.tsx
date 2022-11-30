import ScreenInput from "./ScreenInputField/ScreenInputField";
import ScreenInfo from "./ScreenInfoField/ScreenInfoField";
import ScreenResult from "./ScreenResultField/ScreenResultField";
import styles from './Screen.module.css'

interface IProps{
    input: string[]
    result: number
    error: boolean
}

function Screen({ input, result, error } : IProps){

    return(
        <div className={styles.screen}>
            <ScreenInfo error={error} />
            <ScreenInput input={input} />
            <ScreenResult result={result} />
        </div>
    )
}

export default Screen;