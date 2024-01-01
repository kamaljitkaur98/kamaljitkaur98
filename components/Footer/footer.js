import styles from './footer.module.css';
import React from 'react';
import Image from "next/legacy/image";

export default function footer(){

    return(
        <React.Fragment>
           <div className={`${styles.wrapper}`} id="connect">
              <div className={`container`}>
                  <div className={`row pt-5`}>
                        <hr className={` ${styles.lineStyling} `}></hr>
                      <div className={`col-12 col-sm-12 text-center mt-4`}>
                        <h4 className={`pt-3 ${styles.heading}`}>Thanks for scrolling till the end</h4>
                        <p className={`pt-2 ${styles.heading2}`}>Stay Connected: Find me on the links below :) </p>
                        <div className={`mx-auto`}>
                        <a className= {` ${styles.anchor}`} href="https://www.linkedin.com/in/kamalkaur99/"><i className={`fab fa-linkedin ${styles.IconStyle}`}></i></a>
                        <a className= {` ${styles.anchor}`} href="https://www.instagram.com/_.kamaljit._/"><i className={`fab fa-instagram ${styles.IconStyle}`}></i></a>
                        <a href="mailto:98kamaljitkaur@gmail.com" className= {` ${styles.anchor}`}><i className={`fa fa-envelope ${styles.IconStyle}`}></i></a>
                        </div> 
                      </div>
                  </div>
              </div>
           </div>
        </React.Fragment>
    )
}
