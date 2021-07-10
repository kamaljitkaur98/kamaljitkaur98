import styles from './side.module.css'

export default function side() {
    return (
        <div id="education">
            <div className={`container-fluid ${styles.canvas}`}>
                <div className={`row`}>
                    <div className={`col-12 col-sm ${styles.stick}`}>
                        <p className={` ${styles.leftSide}`}>Education</p>
                        <div className={` ${styles.leftTop}`}>
                            <p className={` mb-5 ${styles.textLeft}`}>Ramrao Adik Institute of Technology<br></br>
                                B.E in Information Technology<br></br>
                                Cumulative Grade Points Average: 9.14<br></br>
                            </p>
                            <p className={` mb-5 ${styles.textLeft}`}>St.Mary's High School and Junior college<br></br>
                                Higher Secondary School Certificate<br></br>
                                Percentage: 88.31%<br></br>
                            </p>
                            <p className={` mb-5 ${styles.textLeft}`}>St. Xavier's High School and Junior College<br></br>
                                Secondary School Certificate<br></br>
                                Percentage: 90.80%<br></br>
                            </p>
                        </div>
                    </div>
                    <div className={`col-12 col-sm ${styles.stick}`}>
                        <p className={` ${styles.rightSide}`}>Experience</p>
                        <div className={` ${styles.rightTop}`}>
                            <p className={` mb-5 ${styles.textRight}`}>Summer Internship Program<br></br>
                                Ramrao Adik Institute of Technology<br></br>
                                November 2020 - January 2021<br></br>
                                Worked on various problem statements <br></br>involving the use of data structures and algorithms.
                                <br></br>
                                Exploring and contributing to Open-source community<br></br>
                            </p>
                            <p className={` mb-5 ${styles.textRight}`}>Web Development Intern<br></br>
                                Nishritha Foundation<br></br>
                                June 2020 - August 2020<br></br>
                                Developed a four-page website for an NGO<br></br>
                                Front end framework: Bootstrap<br></br>
                                Database: MySQL<br></br>
                                Scripting: PHP<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}