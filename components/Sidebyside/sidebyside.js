import styles from './side.module.css'

export default function side() {
    const education = require("./education.json")
    const experiences = require("./experience.json")
    return (
        <div id="background" className='content light'>
            <div className={`container-fluid ${styles.canvas}`}>
                <div className={`row ${styles.parent}`}>
                    <div className={`col-12 col-sm ${styles.stick}`}>
                        <p className={` ${styles.leftSide}`}>Education</p>
                        <div className={` ${styles.leftTop}`}>
                            {
                                Object.keys(education).map((item, key) => (
                                    <><p className={` mb-3 ${styles.textLeft}`}> { education[item].institute }: {education[item].degree}<br></br>
                                    {education[item].period} | { education[item].grade } <br></br>
                                    </p></>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className={`col-12 col-sm ${styles.stick}`}>
                        <p className={`${styles.rightSide}`}>Experience</p>
                        <div className={` ${styles.rightTop}`}>
                            {
                                Object.keys(experiences).map((item, key) => (
                                    <><p className={`${styles.textRight}`}> <span className={`${styles.outline}`}><b>{experiences[item].designation}</b> </span>, <i>{experiences[item].tenture}</i> <br></br>
                                    {experiences[item].company} <br></br> Technical Stack: {experiences[item].techstack}
                                    
                                    </p></>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}