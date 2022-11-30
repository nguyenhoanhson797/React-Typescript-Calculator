import { ReactComponent as ReturnIcon } from '../../../../icon/keyboard-return.svg'
import { DispatchAction } from '../../../../interfaces'
import styles from './ReturnButton.module.css'

interface IProps {
    setShow : DispatchAction<boolean>,
    setFocus : DispatchAction<boolean>,
}

function ReturnButton({setShow, setFocus} : IProps){

    const closeView = () => {
        setShow(false)
        setFocus(true)
    }

    return(
        <div className={styles.return} onClick={closeView}>
            <ReturnIcon/>
        </div>
    )
}

export default ReturnButton;