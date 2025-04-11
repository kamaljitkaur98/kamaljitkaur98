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
                                <div className={ `row mt-3 ml-4 align-items-center` }>
                                    <div className='col-4'>
                                        <h3 className={`${styles.projectTitle}`}>{projects[item].title}</h3>
                                    </div>
                                    <div className='col-4'>
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
                                    <div className='col-4 d-flex justify-content-center'>
                                            <div className={ `${styles.iconCircle}`}>
                                                <Icon icon="simple-icons:refinedgithub" style={{ color: "var(--main-theme-color)" }}/>
                                            </div>
                                    </div>
                                </div>
                                <div className={ `row mt-4 ml-4 ${styles.heightContainer}`}>
                                    <div className='col-12'>
                                        <div className={ ` ${styles.projectDescriptionCard }`}>
                                            <p>{projects[item].description}</p>
                                            <p>{projects[item].lineone}</p>
                                            <p>{projects[item].lastone}</p>
                                        </div>
                                        <div className={ `${styles.imageBox}`}>
                                            <Image className={ `${styles.movingImage}`} src={projects[item].image} alt="Bookstore POS PNG" width="200" height="200"/>
                                        </div>
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
