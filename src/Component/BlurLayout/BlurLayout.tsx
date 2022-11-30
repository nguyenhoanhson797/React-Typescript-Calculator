import styles from './BlurLayout.module.css'

function BlurLayout({ show }: {show : boolean}){

    return(
        <div className={`${styles.blurLayout} ${show ? styles.show : styles.hide}`}></div>
    )
}

export default BlurLayout;