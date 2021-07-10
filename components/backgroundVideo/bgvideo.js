import VideoBg from 'reactjs-videobg';
import styles from './video.module.css';

export default function BgVideo() {

    const video = 'smoke.mp4';

    return (
        <div>
            <div className={styles.frame} id="main">
                <video autoPlay="autoplay" loop="loop" muted className={styles.video}>
                    <source src={video} />
                </video>
            </div>
        </div>
    )
}