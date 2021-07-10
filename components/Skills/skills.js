import React from 'react';
import styles from './skills.module.css';
import Image from 'next/image';

export default function skills(){
        return(
            <div className={`${styles.canvas}`} id="skills">
                <div className={`container`}>
                    <div className={`row pt-5`}>
                        <div className={`col-12 col-sm `}>
                            <p className={`${styles.headings}`}>Languages</p>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/python.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/java.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/php.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/javascript.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col`}></div>
                    </div>
                    <div className={`row pt-5`}>
                        <div className={`col-12 col-sm`}>
                            <p className={`${styles.headings}`}>Tools</p>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/git.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/github.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/figma.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/canva.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col`}>
                        </div>
                    </div>
                    <div className={`row pt-5`}>
                        <div className={`col-12 col-sm`}>
                            <p className={`${styles.headings}`}>Databases</p>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/mongodb.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/sqlite.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/mysql.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                    </div>
                    <div className={`row pt-5`}>
                        <div className={`col-12 col-sm`}>
                            <p  className={`${styles.headings}`}>Frameworks</p>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/bootstrap.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/flask.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                    </div>
                    <div className={`row pt-5`}>
                        <div className={`col-12 col-sm`}>
                            <p className={`${styles.headings}`}>Library</p>
                        </div>
                        <div className={`col-2 ${styles.size} col-sm`}>
                            <Image src="/react.svg" alt="Python" layout='fill'/>
                        </div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                        <div className={`col`}></div>
                    </div>
                </div>
            </div>
        )
}