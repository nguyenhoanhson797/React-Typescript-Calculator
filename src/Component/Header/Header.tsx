import styles from './Header.module.css'
    
function Heading () {

    return(
        <div className={styles.heading}>      
            <div className={styles.title}>
                <p> Calculator </p>
            </div>
        </div>
    )
}

export default Heading;