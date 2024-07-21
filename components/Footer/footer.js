import styles from './footer.module.css';
import React from 'react';
import Image from "next/legacy/image";

export default function footer(){

    return(
        <React.Fragment>
           <div className={`${styles.wrapper}`} id="connect">
              <div className={`container`}>
                  <div className={`row`}>
                        <hr className={` ${styles.lineStyling} `}></hr>
                      <div className={`col-12 col-sm-12 text-center mt-2 mb-2`}>
                        <div className={`mx-auto`}>
                        <a className= {` ${styles.anchor}`} target="_blank" href="https://www.linkedin.com/in/kamalkaur99/"><i className={`fab fa-linkedin ${styles.IconStyle}`}></i></a>
                        <a className= {` ${styles.anchor}`} target="_blank" href="https://www.instagram.com/_.kamaljit._/"><i className={`fab fa-instagram ${styles.IconStyle}`}></i></a>
                        <a target="_blank" href="mailto:98kamaljitkaur@gmail.com" className= {` ${styles.anchor}`}><i className={`fa fa-envelope ${styles.IconStyle}`}></i></a>
                        <a className= {` ${styles.anchor}`} target="_blank" href="https://github.com/kamaljitkaur98"><i className={`fab fa-github ${styles.IconStyle}`}></i></a>
                        </div> 
                      </div>
                  </div>
              </div>
           </div>
        </React.Fragment>
    )
}
