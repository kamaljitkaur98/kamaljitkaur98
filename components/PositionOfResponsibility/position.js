import styles from './position.module.css';
import React from 'react';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';

export default function positions(){

    const animationSetting = {
        hide: {
            opacity: 0,
            x: -500,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

    const style = {
        marginTop: 0
    }

    const information = require("./volunteerpositions.json")

    return(
       <div className={` ${styles.canvas}`} id="positions">
           <div className={`container`}>
               <div className={`row pt-5`}>
                   <div className={'col-12 col-sm-5'}>
                       <h1 className={`${styles.heading}`}>Positions of Responsibility</h1>
                       <p className={`${styles.text}`}>Until year 2015, speaking in front of a crowd was a nightmare to me. However as I started volunteering
                        for various events I developed a sense of confidence which further helped me to become a good 
                        leader and public speaker.
                        <br></br>
                        <br></br>
                        Below is an account my volunteering experiences
                    </p>
                   </div>
                   <div className={`col-12 col-sm-7 text-center`}>
                        <Image src="/bitmoji.png" alt="Bitmoji avatar Image" width="200" height="200" style={style}/>
                    </div>
               </div>
               <motion.header
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={animationSetting}>
                {
                    Object.keys(information).map((item,key) =>(
                        <div className={`row pt-4`}>
                            <div className={'col-4 text-center'}>
                                <h5 className={` ${styles.position} `}>{information[item].Position}</h5>
                            </div>
                    <div className={`col-8`}>
                        <p> <span className={`${styles.organization}`}>{information[item].Organization}</span>
                            <br></br>
                            <span className={`${styles.date}`}><i>{information[item].Date}</i></span>
                            <br></br>
                            {
                                Array.from(information[item].Description).map((child, index) => {
                                    return <><span key={index} className={`${styles.description}`}>{child}</span><br></br></>
                                })
                            }                        
                        </p>
                    </div>
                </div>
                    ))
                }
            </motion.header>
           </div>
       </div>
    )
}