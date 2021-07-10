import styles from './footer.module.css';
import React from 'react';
import Image from 'next/image';

export default function footer(){

    return(
        <React.Fragment>
           <div className={`${styles.wrapper}`} id="connect">
              <div className={`container`}>
                  <div className={`row pt-5`}>
                      <div className={`col-12 col-sm-3 text-sm-right text-center`}>
                      <Image src="/smartfarm.png" alt="Cataract Detection and Classification" width="200px" height="200px" className={` ${styles.image}`}/>
                      </div>
                      <div className={`col-12 col-sm-9 text-center mt-4`}>
                        <h4 className={`pt-3 ${styles.heading}`}>Let's Start A Conversation</h4>
                        <p className={`pt-2 ${styles.heading}`}>Thanks for scrolling till the end. Send me a connection request or ping on Instagram to discuss about a good research based or freelance web development project.</p>
                        <div className={`mx-auto`}>
                        <a className= {` ${styles.anchor}`} href="https://www.linkedin.com/in/kamalkaur99/"><i className={`fab fa-linkedin ${styles.IconStyle}`}></i></a>
                        <a className= {` ${styles.anchor}`} href="https://www.instagram.com/_.kamaljit._/"><i className={`fab fa-instagram ${styles.IconStyle}`}></i></a>
                        </div> 
                      </div>
                  </div>
              </div>
           </div>
        </React.Fragment>
    )
}