import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';


export default function Navbar(){

    const toggle = () =>{
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
    }
    
    return(
        <React.Fragment>
            <nav id="sticky" className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
                    <button className={`navbar-toggler navbar-toggle`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${styles.icon}`}></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-fill w-100">
                        <li class="nav-item mr-5" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link href="/#main" className={` ${styles.navlink}`}> HOME </Link>
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link href="/#background" className={` ${styles.navlink}`}> BACKGROUND </Link> 
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link href="/#volunteer" className={` ${styles.navlink}`}> PROJECTS </Link>  
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link href="/#positions" className={` ${styles.navlink}`}> VOLUNTEER </Link>  
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link href="/#connect" onClick={toggle} className={` ${styles.navlink}`}> CONNECT </Link>
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a className={` ${styles.navlink}`} href="./Resume_Kamaljit_Aulakh.pdf" download>RESUME</a> 
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}