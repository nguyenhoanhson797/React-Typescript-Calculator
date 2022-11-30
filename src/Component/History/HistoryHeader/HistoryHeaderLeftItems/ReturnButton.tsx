import { ReactComponent as Return } from '../../../../icon/keyboard-return.svg'
import styles from './ReturnButton.module.css'
import { EState } from '../../../../interfaces'

function ReturnButton({setShow, setFocus} : {setShow : EState["setStateBoolean"], setFocus : EState["setStateBoolean"]}){

    const closeView = () => {
        setShow(false)
        setFocus(true)
    }

    return(
        <div className={styles.return} onClick={closeView}>
            <Return/>
        </div>
    )
}

export default ReturnButton;