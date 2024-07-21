import styles from './video.module.css';
import React, {useRef, useEffect} from "react"

export default function BgVideo(props) {

    //const video = 'smoke.mp4';
    const videoRef = useRef(undefined);

    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })

    return (
        <div className='content light'>
            <div className={ `${styles.frame}`} id="main">
                <video
                className={styles.video}
                ref={videoRef}
                loop
                autoPlay
                muted
                playsInline>
                    <source src={props.video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}