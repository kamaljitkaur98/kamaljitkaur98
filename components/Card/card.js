export default function Card(props) {
    return (
        <div>
            <style jsx>
                {
                    `

                    .cardboard {
                        background-color: black;
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
                        border:2px solid black;
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
                        color: white;
                        padding-left:3vw;
                        font-family: Georgia, "Times New Roman", Times, serif;
                    }

                    p {
                        color: white;
                        padding-left: 3vw;
                        font-family: 'Courier New', Courier, monospace;
                    }

                    `
                }
            </style>
            <div className="cardboard mb-5">
                <div className="card-body">
                    <h1>More ABOUT ME</h1>
                    <p>I am a IT Graduate passout from Mumbai University and incoming Systems Engineer at Tata Consultancy Service(TCS).<br></br>
                        I am highly passionate about working on web development based projects. <br></br>
                        I am not a professional UI/UX designer but I have
                        I keen eye for good and appealing user interfaces and make my best effort to bring it to live. <br></br>
                        I take interest in competitive programming using Python. <br></br>
                        With my interest in python I started exploring and working on projects
                        related to Machine learning and Deep learning.
                    </p>
                </div>
            </div>
        </div>
    )
}