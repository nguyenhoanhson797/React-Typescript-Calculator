import styles from './BlurLayout.module.css'

type TypeProps = {show : boolean}

function BlurLayout({ show }: TypeProps){

    return(
        <div className={`${styles.blurLayout} ${show ? styles.show : styles.hide}`}></div>
    )
}

export default BlurLayout;