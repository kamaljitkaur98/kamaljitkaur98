import styles from './project.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from "next/image";
import { Icon } from '@iconify/react';

export default function project() {

    const projects = require("./projects.json")

    return (
        <div className={`container ${styles.projectcontainer}`} id="projects">
            <h2 className={`${styles.projectheading}` }> What I've Built </h2>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                
                {
                    Object.keys(projects).map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className={`container-fluid ${styles.imageContainer}`}>
                                <div className={ `row mt-3 ml-lg-4 ml-2 align-items-center` }>
                                    <div className='col-md-4 col-12'>
                                        <h3 className={`${styles.projectTitle}`}>{projects[item].title}</h3>
                                    </div>
                                    <div className={`col-md-4 col-0 ${styles.wideIcon}`}>
                                        <div className={ `${styles.circleContainer}`}>
                                        {
                                            Array.from(projects[item].technologies).map((icon, index) => {
                                                return<div>
                                                    
                                                        <div className={ `${styles.iconCircle}`}>
                                                            <Icon icon={icon} style={{ color: "var(--main-theme-color)", width: "30px", height: "30px" }}/>
                                                        </div>
                                                    
                                                    </div>
                                            })
                                        }
                                        </div>
                                    </div>
                                    <div className={ `col-md-4 col-6 d-flex justify-content-center ${styles.wideIcon}`}>
                                        {projects[item].github && (
                                        <div className={styles.iconCircle}>
                                            <a href={projects[item].github} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="simple-icons:github" style={{ color: "var(--main-theme-color)" }} />
                                            </a>
                                        </div>
                                        )}
                                        {projects[item].url && (
                                        <div className={styles.iconCircle}>
                                            <a href={projects[item].url} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="mdi:web" style={{ color: "var(--main-theme-color)" }} />
                                            </a>
                                        </div>
                                        )}
                                    </div>
                                </div>
                                <div className={ `row mt-4 ml-lg-4 ml-0 ${styles.heightContainer}`}>
                                    <div className='col-12'>
                                        <div className={ ` ${styles.projectDescriptionCard }`}>
                                            <p>{projects[item].description}</p>
                                            <p>{projects[item].lineone}</p>
                                            <p>{projects[item].lastone}</p>
                                        </div>
                                        <div className={ `${styles.imageBox}`}>
                                            <img className={ `${styles.movingImage} img-fluid`} src={projects[item].image} alt="Bookstore POS PNG" />
                                        </div>
                                    </div>
                                    <div className={ `col-sm-8 col-12 ${styles.mobileIcon}`}>
                                        <div className={ `${styles.circleContainer}`}>
                                        {
                                            Array.from(projects[item].technologies).map((icon, index) => {
                                                return<div key={index}>
                                                    
                                                        <div className={ `${styles.iconCircle}`}>
                                                            <Icon icon={icon} style={{ color: "var(--main-theme-color)", width: "30px", height: "30px" }}/>
                                                        </div>
                                                    
                                                    </div>
                                            })
                                        }
                                        </div>
                                    </div>
                                    <div className={`col-sm-4 col-12 ${styles.mobileIcon}`}>
                                        {projects[item].github && (
                                        <div className={styles.iconCircle}>
                                            <a href={projects[item].github} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="simple-icons:github" style={{ color: "var(--main-theme-color)" }} />
                                            </a>
                                        </div>
                                            )}
                                            {projects[item].url && (
                                            <div className={styles.iconCircle}>
                                                <a href={projects[item].url} target="_blank" rel="noopener noreferrer">
                                                <Icon icon="mdi:web" style={{ color: "var(--main-theme-color)" }} />
                                                </a>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
