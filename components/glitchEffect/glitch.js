import styles from './glitch.module.css';

export default function glitchText() {
    return (
        <div className='content light'>
            <div className={styles.hero}>
                <h1 className={styles.headings}>Hello ! My Name is</h1>
            </div>
            <div className={styles.glitch}>Kamaljit Kaur Aulakh</div>
            <div className={styles.floating}>
                <h2 className={styles.description}>kamaljit.is('Full Stack Developer')</h2>
                <h2 className={styles.description}>kamaljit.is('Data Enthusiast')</h2>
                <h2 className={styles.description}>kamaljit.is('Caffeine Addict')</h2>
            </div>
        </div>
    )
}