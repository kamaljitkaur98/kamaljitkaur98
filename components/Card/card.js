import { motion } from 'framer-motion';

export default function Card(props) {

    const animationSetting = {
        hide: {
            opacity: 0,
            x: -200,
        },
        show: {
            opacity: 1,
            x : 0,
            transition: {
                duration: 2,
            },
        },
    };

    return (
        <div>
            <style jsx>
                {
                    `
                    .cardboard {
                        background-color: var(--main-theme-color) ;
                        margin-top: ${props.marginTop};
                        margin-left: ${props.marginLeft};
                        position: relative;
                        width: 90vw;
                        z-index: 10;
                    }

                    .cardboard:before{
                        content:"";
                        position: absolute;
                        left: -15px;
                        right: 10px;
                        top: -20px;
                        bottom:10px;
                        border:2px solid var(--main-theme-color) ;
                    }

                    @media screen and (max-width:320px){
                        .cardboard::before{
                            left: -10px;
                            right: 8px;
                            top: -18px;
                        }
                        .card-body {
                            margin-bottom: 20px;
                            margin-top: 20px !important;
                        }
                    }

                    h1 {
                        color: black;
                        padding-left:3vw;
                        font-family: "didot";
                    }

                    p {
                        color: black;
                        padding-left: 3vw;
                        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    }

                    `
                }
            </style>
            <motion.header
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={animationSetting}>
                    <div className="cardboard mb-5 content dark">
                        <div className="card-body">
                            <h1>More ABOUT ME</h1>
                            <p> 
                            Hi, I'm Kamaljit Aulakh, a Computer Science master's student at Syracuse University (graduating May 2025) with a passion for building clean, scalable software.
                            <br></br>With 2+ years of experience as a software engineer in the <b>FinTech</b> space, I've built robust <b>microservices, containerized deployments, and frontends</b> that actually make users smile. My toolkit includes <b>Java, Python, JavaScript, React, Docker, SQL</b> and more—plus some handy experience with <b>Spring Boot, Kubernetes, and low-code platform</b> development.
                            <br></br>Whether I'm working on a Flutter quiz app or automating data flows between platforms like HEAL and Dataverse, I focus on simple, practical solutions that get the job done right. Also, I'll take chai over coffee any day ☕ —and yes, I speak (and code) in multiple languages.
                            <br></br>My short term learning goals include diving into security for API's and backend development using blockchain. I am active looking to connect with individuals and foster an environment of growth and learning. If this sounds like your way of doing things, let's connect and build something meaningful!
                            </p>
                        </div>
                    </div>
            </motion.header>
        </div>
    )
}