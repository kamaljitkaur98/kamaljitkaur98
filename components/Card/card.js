export default function Card(props) {
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
            <div className="cardboard mb-5 content dark">
                <div className="card-body">
                    <h1>More ABOUT ME</h1>
                    <p>I am an experienced Software Engineer currently pursuing a Master's degree in Computer Science at Syracuse University. 
                        My professional passion lies in the realm of web development, where I specialize in utilizing Java and JavaScript frameworks to create exceptional projects. 
                        I possess a strong dedication to enhancing user experiences through meticulous research and implementation of best-in-class UI/UX practices. 
                        Additionally, I have a keen interest in competitive programming, utilizing both Python and Java, which serves as a valuable tool for honing my problem-solving abilities.<br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}