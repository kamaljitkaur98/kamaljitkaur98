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
                        background-color: aqua;
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
                        border:2px solid aqua;
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
                        font-family: Georgia, "Times New Roman", Times, serif;
                    }

                    p {
                        color: black;
                        padding-left: 3vw;
                        font-family: 'Courier New', Courier, monospace;
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
                            <p>I'm a seasoned Software Engineer currently diving into a Master's in Computer Science at Syracuse University. I'm really into backend systems development, especially when it comes to using Java and JavaScript frameworks. I get a kick out of experimenting and learning best practices in UI design.
                               Lately, I've been drawn to the intricate world of data and am eager to tackle its challenges. On the side, I practice competitive programming with Python and Java—it's a fun way to sharpen my problem-solving skills. Below is a detailed account of my professional and volunteer experiences<br></br>
                            </p>
                        </div>
                    </div>
            </motion.header>
        </div>
    )
}