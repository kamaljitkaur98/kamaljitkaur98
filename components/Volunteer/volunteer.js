import styles from './volunteer.module.css';
import Image from 'next/image'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

export default function volunteer() {
    const projects = {
        first: {
            title: "Cataract Detection and Classification",
            description: "Classification of an eye image into cataract or normal eye.Comparative study between the various feature extraction and machine learning algorithms.Further classification on the intensity of cataract namely Mild and Severe using deep learning.Conference paper published at Cataract detection using textural features and Machine learning algorithms.",
            image: "/cataract.png",
            url : "https://github.com/kamaljitkaur98/Cataract-Detection-and-Classification"
        },
        second : {
            title: "IOT based solution to smart farming",
            description : "A sensor network environment built to monitor the various physical parameters at a farm such as smoke, temperature, humidity and moisture using Raspberry Pi. Also analyzing the results to develop a predictive model to forecast weather.Camera based surveillance for monitoring trespassing the farm land. The results acessible via a Flask-based GUI.",
            image : "/smartfarm.png",
            url : "https://github.com/kamaljitkaur98/IoT-based-Smart-Farming-using-Machine-learning"
        },
        third : {
            title : "Movie review search application",
            description: "API Used: Imdb developers API https://developer.imdb.com/ which contain a dataset of movies and TV series implemented on an easy to search and interactive react based user interface. State Management achieved using Redux",
            image : "/movie.png",
            url :"https://github.com/kamaljitkaur98/movie-search-web-application"
        },
        fourth: {
            title: "RAIT ADMISSION CHATBOT",
            description : "Whatsapp and Telegram integrated Chabot that can be used to get admission related queries solved without visiting the college and information of events and notices post-admission. Currently in process of filling Copyright for the same.",
            image: "/chatbot.png",
            url : "http://t.me/rait_admission_bot"
        }
    }
    return (
        <div className={`${styles.canvas}`} id="volunteer">
            <div className={`container `}>
                <div className={`row`}>
                    <div className={`col text-center ${styles.heading}`}><h1 className={`pt-3`}>Projects</h1></div>
                </div>
                <div className={`row mt-3`}>
                {
                    Object.keys(projects).map((item,key) => (  
                    <div className={`col-12 col-sm-6`}>
                        <div className="text-center mt-2">
                            <a href={projects[item].url}>
                                <Image src={projects[item].image} alt={projects[item].title} width="300px" height="200px"/>
                            </a>
                            <p className={`${styles.para}`}>{projects[item].title}</p>
                        </div>
                        <p className={`mt-2 ${styles.description}`}>{projects[item].description}</p>
                    </div> 
                    ))
                }
                 </div>
            </div>
        </div>
    )
}