import styles from './position.module.css';
import React from 'react';
import Image from "next/legacy/image"

export default function positions(){
    const style = {
        marginTop: 0
    }

    const information = {
        First: {
            Position: "Speaker",
            Date: "21 June - 23 June 2020",
            Organization: "Software development Group (SDG) RAIT summer internship program",
            Description: "Delivered a session on basics of web development with focus on responsive design using Bootstrap 4"
        },
        Second: {
            Position: "Vice President",
            Date: "June 2020 - August 2021",
            Organization: "Computer Society of India - RAIT student Chapter",
            Description: "Organizing various events, Tech-talks, workshops on cutting-edge technologies.Taking part in final decisions related to the various committee matters.Leading and mentoring the Junior Committee"
        },
        Third: {
            Position: "Publicity Head",
            Date: "July 2019 - Jun 2020",
            Organization: "Computer Society of India - RAIT student Chapter",
            Description: "Leading team of 100+ members. Promoting workshops and talks among local colleges. Publicity of TECHMATE 2019 across all major technical and non-technical colleges of Mumbai. Awarded with the title of 'Best Domain' for excellence of performance"
        },
        Fourth: {
            Position: "Volunteer",
            Date: "November 2019",
            Organization: "Avishkar - National Level Project Presentation Competition",
            Description: "Managed the participants records and queries while in the organizing team of Zonal level round of Avishkar"
        },
        Fifth : {
            Position: "Membership Co-head",
            Date: "July 2018 - July 2019",
            Organization: "Computer Society of India - RAIT student Chapter",
            Description: "Promoting RAIT culture and encouraging young mass in our college to participate in technical committee of the college.Maintaining the database of active and alumni members. Awarded with the title of 'Best Junior Committee Member' for excellence of performance"
        },
        Sixth : {
            Position: "Campus Ambassador",
            Date: "September 2018 - January 2019",
            Organization: "IIT Kanpur",
            Description: "Communicating events and collaborations between RAIT and IIT Kanpur Campus"
        }
    }
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
                        <span className={`${styles.description}`}>{information[item].Description}</span>
                    </p>
                </div>
            </div>
                ))
            }
           </div>
       </div>
    )
}