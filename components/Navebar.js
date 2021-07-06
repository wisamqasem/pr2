import React from 'react'
import Link from"next/link"
import Image from"next/image"
import{useRouter} from "next/router"
import { FaFacebook } from 'react-icons/fa';
import {FiHome} from 'react-icons/Fi';
import {SiAboutDotMe} from 'react-icons/Si';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
const Navebar = () => {
  const router=useRouter();
  console.log(router);

    return (
      
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link  href="/">
        <a className="navbar-brand d-flex align-items-center">
        <Image src="/mylogo.png" alt="download" width="40" height="40"/>
        <span className="ms-2">מ.זחאייקה חשמל ושיפוצים</span>
        </a>
         </Link> 
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link href="/">
                <a className={"nav-link"+`${router.pathname
                  ==="/" ? "":''}`}
                 aria-current="page" > <FiHome size="2em" color="grey"/> </a>
                </Link>
                </li>
              
              <li className="nav-item">
              <Link href="/about">
              
               <a className={"nav-link"+`${router.pathname
                  ==="/about" ? "":''}`} href="/about"><SiAboutDotMe size="2em" color="grey"/></a>
                </Link>
                </li>
                <li className="nav-item">
                <Link href="linkedin.com/in/mohammad-zhayeka-13a8a81b5">
                  <a className={"nav-link"+`${router.pathname
                    ==="/blog" ? "":''}`} href="linkedin.com/in/mohammad-zhayeka-13a8a81b5"><TiSocialLinkedinCircular size="2.5em" color="grey" /></a>
                  </Link>
                  </li>
            
              <li className="nav-item">
              <Link href="https://www.facebook.com/amhmad.zhayka/">
                <a className={"nav-link"+`${router.pathname
                  ==="/blog" ? "":''}`} href="https://www.facebook.com/amhmad.zhayka/"><FaFacebook size="2em" color="grey" /></a>
                </Link>
                </li>
                
                </ul>
            
          
          </div>
          
        </div>
      </nav> 
        </header>
    )
}

export default Navebar
