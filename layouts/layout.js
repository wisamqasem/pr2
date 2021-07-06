import React from 'react';
import Head from 'next/head';
import Navebar from '../components/Navebar';
import Footer from '../components/Footer';


const layout = ({children}) => {
    return (
        <div>
        <Head>
        <title>my work</title>
        <link rel="icon" href="/download.png" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
         rel="stylesheet" 
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
        crossorigin="anonymous"></link>
        </Head>
           <Navebar/>
          
       <main> 
        
{children}

</main>

<Footer/>
        </div>
    )
}

export default layout
