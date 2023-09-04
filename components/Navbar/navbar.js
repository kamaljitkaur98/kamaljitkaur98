import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import $ from 'jquery';


export default function Navbar(){

    const toggle = () =>{
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
    }

    return(
        <React.Fragment>
            <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
                    <button className={`navbar-toggler navbar-toggle`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${styles.icon}`}></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-5" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#main" className={` ${styles.navlink}`}>
                            <i class="fas fa-laptop-house mr-2"></i>Home
                        </Link>
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#education" className={` ${styles.navlink}`}>
                        <i class="fas fa-user-graduate mr-2"></i>Under Grad
                        </Link> 
                        </li>
                        {/* <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#skills"><a className={` ${styles.navlink}`}><i class="fas fa-hands-helping mr-2"></i>Skills</a></Link>  
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#volunteer"><a className={` ${styles.navlink}`}><i class="fas fa-code mr-2"></i>Projects</a></Link>  
                        </li>
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#positions"><a className={` ${styles.navlink}`}><i class="fas fa-hands-helping mr-2"></i>Volunteer</a></Link>  
                        </li>
                         
                        <li class="nav-item mr-5"  data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link href="/#connect"><a className={` ${styles.navlink}`} onClick={toggle}><i class="fas fa-inbox mr-2"></i>Connect</a></Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}