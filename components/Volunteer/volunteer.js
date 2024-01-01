import styles from './volunteer.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function volunteer() {

    const animationSetting = {
        hide: {
            opacity: 0,
            x: -200,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

    const projects = {
        first: {
            title: "Netra",
            description: "Objective: Detect cataracts and classify severity (mild, normal, severe) to improve early detection accuracy.",
            lineone: "Phase 1: Achieved 96% accuracy in cataract detection using combined SIFT-GLCM features with SVM, Random Forest, and Logistic Regression. SIFT-GLCM individually showed lower accuracies. Phase 2: Attained 97.66% validation accuracy for severity classification using deep convolutional neural network models (SqueezeNet, MobileNet, VGG16).",
            lastone: "Outcome: Results accessible via web and Flask-based user interface. Phase 1 implementation published in ICAIAA 2021 conference paper for binary cataract classification.",
            image: "/cataract.PNG",
            url : "https://github.com/kamaljitkaur98/Cataract-Detection-and-Classification"
        },
        second : {
            title: "AgriConnect",
            description : "Objective: The primary objective was to design a system that significantly reduces manual efforts by automating various processes related to farming.",
            lineone: "Implementation: Established sensor network within the farm premises, powered by Raspberry Pi, to monitor critical physical parameters including smoke, temperature, humidity, and moisture. This data is meticulously analyzed on cloud platforms to construct a predictive model for accurate weather forecasting. Additionally, camera-based surveillance is implemented to monitor and detect any trespassing incidents on the farm.",
            lastone: "Outcome: The outcomes and insights derived from these monitoring systems are conveniently accessible through a Flask-based GUI",
            image : "/smartfarm.PNG",
            url : "https://github.com/kamaljitkaur98/IoT-based-Smart-Farming-using-Machine-learning"
        },
        third : {
            title : "FilmFlix Database",
            description: "Objective: To create web application leveraging the open source API to provide users with a seamless search experience for movies and TV series.",
            lineone: "Using React, a user-friendly interface was crafted, enabling users to easily search, filter, and access detailed information about various titles. Redux was integrated to manage the application's state efficiently, ensuring smooth data flow and responsiveness.",
            lastone: "Outcome: The resulting web application offers users a streamlined experience for browsing movies and TV series. With Redux handling the state management, the application maintains performance and states.",
            image : "/movie.PNG",
            url :"https://github.com/kamaljitkaur98/movie-search-web-application"
        },
        fourth: {
            title: "RAIT AdmitBot",
            description : "Objective : An integrated Chatbot on platforms such as WhatsApp and Telegram. This Chatbot serves as a comprehensive tool to address admission-related inquiries without necessitating a physical visit to the college.",
            lineone: "System developed using Google Dialogflow with knowledge base collected with the help of Faculty members at undergraduate Institute.",
            lastone: "Outcome: This idea was further copyrighted by faculty at the Department of Information Technology so as to scale for the university in the coming years.",
            image: "/chatbot.PNG",
            url : "http://t.me/rait_admission_bot"
        }
    }
    return (
        <div className={`${styles.canvas}`} id="volunteer">
            <div className={`container `}>
                <div className={`row`}>
                    <div className={`col text-center ${styles.heading}`}><h1 className={`pt-3`}>Projects</h1></div>
                </div>
                <motion.header
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={animationSetting}>
                <div className={`row mt-3`}>
                {
                    Object.keys(projects).map((item,key) => (  
                        <div className={`col-12 col-sm-6`}>
                            <div className='container'>
                                <div className='row'>
                                    <img src={projects[item].image} alt={projects[item].title} className={`${styles.image} ${styles.image2}`} width="500" height="250"/>
                                </div>
                                <div className='row'>
                                    <div className='col-10'>
                                        <p className={`${styles.para}`}>{projects[item].title}</p>
                                    </div>
                                    <div className='col-2'>
                                        <a href={` ${projects[item].url}`} target="_blank"><FontAwesomeIcon className={` ${styles.icon} `} icon={faLink} /></a>
                                    </div>    
                                </div>
                                <div className='mt-3 row'>
                                    <p className={`${styles.description}`}>{projects[item].description}</p>
                                    <p className={`${styles.description}`}>{projects[item].lineone}</p>
                                    <p className={`${styles.description}`}>{projects[item].lastone}</p>
                                </div>
                            </div>
                        </div>
                       
                    
                    ))
                }
                 </div>
                 </motion.header>
            </div>
        </div>
    )
}
