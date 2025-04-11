import styles from './footer.module.css';
import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <div className={`${styles.wrapper}`} id="connect">
                <div className="container">
                    <div className="row justify-content-center">
                        <hr className={`${styles.lineStyling}`}></hr>
                        <div className="col-12 text-center mt-2 mb-2">
                            <div className="d-inline-flex justify-content-center">
                                <a className={`${styles.anchor}`} target="_blank" href="https://www.linkedin.com/in/kamalkaur99/" rel="noopener noreferrer">
                                    <i className={`fab fa-linkedin ${styles.IconStyle}`}></i>
                                </a>
                                <a className={`${styles.anchor}`} target="_blank" href="https://www.instagram.com/_.kamaljit._/" rel="noopener noreferrer">
                                    <i className={`fab fa-instagram ${styles.IconStyle}`}></i>
                                </a>
                                <a className={`${styles.anchor}`} target="_blank" href="mailto:98kamaljitkaur@gmail.com" rel="noopener noreferrer">
                                    <i className={`fa fa-envelope ${styles.IconStyle}`}></i>
                                </a>
                                <a className={`${styles.anchor}`} target="_blank" href="https://github.com/kamaljitkaur98" rel="noopener noreferrer">
                                    <i className={`fab fa-github ${styles.IconStyle}`}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
