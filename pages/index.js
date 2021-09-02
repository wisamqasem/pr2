import React, { useState } from 'react'
import Link from "next/link";
import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel'
import ContactForm  from '../components/contact';
import axios from 'axios'

// axios.get('https://firestore.googleapis.com/v1/projects/my-job-68b20/databases/(default)/documents/data/')
// .then(res => {
//     console.log("the data : ",res);
//    // return Promise.resolve( res )
// })






const index = () => {

    const [products, setProducts] = useState([]);
    ///////////////////////////////////////////////////////////////////////////// GET DATA FROM FIREBASE FROM HERE..............
   if(products.length==0){
        axios.get("https://firestore.googleapis.com/v1/projects/next-c8eaf/databases/(default)/documents/data").then(res=>{
 console.log("the data : ",res)
            let arr=[];
            //أنساك من هاد الفنكشن
            let documentToJson = function (fields) {
              let result = {};
              for (let f in fields) {
                  let key = f, value = fields[f],
                      isDocumentType = ['stringValue', 'booleanValue', 'doubleValue',
                          'integerValue', 'timestampValue', 'mapValue', 'arrayValue', 'nullValue'].find(t => t === key);
                  if (isDocumentType) {
                      let item = ['stringValue', 'booleanValue', 'doubleValue', 'integerValue', 'timestampValue', 'nullValue']
                          .find(t => t === key)
                      if (item)
                          return value;
                      else if ('mapValue' == key)
                          return documentToJson(value.fields || {});
                      else if ('arrayValue' == key) {
                          let list = value.values;
                          return !!list ? list.map(l => documentToJson(l)) : [];
                      }
                  } else {
                      result[key] = documentToJson(value)
                  }
              }
              return result;
          }
          res.data.documents.map((x)=>{
            arr=[...arr, documentToJson(x.fields)]
                })
        
              //  productList=[...arr]
        
      setProducts(arr)




        })
    
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
<>
    <Head>
    <title>my work | home </title>
    <meta name="keywords"content="works"/>
    </Head>
<div className="container">
<main>
<Carousel>





  <Carousel.Item>
    <img
      className="d-block w-100"
      src="market.png" width="50" height="500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>עבודות חשמל ברשת (גולדה)</h4>
      <p> איזור רישון ליציון </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="office.png" width="50" height="500"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>עבדות חשמל במשרדים</h3>
      <p>איזור מודיעין</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="home.png" width="10" height="500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>שיפוץ כללי</h3>
      <p>איזור ירושלים</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</main>


</div>
<hr/>


    <div className="container" dir = "rtl">
    <div className="row">
    
    <hr/>
    </div>
<div className="row">
    {console.log("the products : ",products)}
    {products.length!=0 && products.map((product,index)=>{
        return(
        <div className="col-10 col-md-4"  key={index}>
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src={product.image} height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body"> 
  
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.text}</p>
    <Link href={`/blog/post?id=${product.id}`}>
    <a className="btn text-secondary">Go somewhere </a>
    </Link> 
    </div>
    </div>
  
 
  
    </div>
        )




    })}
    {/* <div className="col-10 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="lights.png" height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body"> 
  
    <h5 className="card-title">אתקנה גופים</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post">
    <a className="btn text-secondary">Go somewhere </a>
    </Link> 
    </div>
    </div>
    </div> */}
    
    {/* <div className="col-12 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="office.png" height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body">
    <h5 className="card-title"> מסרדים , בתי ספר</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post2">
    <a className="btn text-secondary">Go somewhere </a>
    </Link> 
  </div>
  </div>
 </div> */}

    {/* <div className="col-12 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="download.png" 
   alt="img"  height="220" width="220"
   />
   <hr/>
  <div className="card-body">
    <h5 className="card-title">דירות,בנינים</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post3">
    <a className="btn btn-primary">Go somewhere </a>
    </Link> 
    </div>
    </div>
    </div> */}
    {/* <div className="col-12 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="bord.png"  height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body">
    <h5 className="card-title">לוחות חשמל</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post4">
    <a className="btn btn-primary">Go somewhere </a>
    </Link> 
    </div>
    </div>
    </div> */}
    {/* <div className="col-12 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="market.png" height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body">
    <h5 className="card-title">חניות מסחרי</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post5">
    <a className="btn btn-primary">Go somewhere </a>
    </Link> 
    </div>
    </div>
    </div> */}
    {/* <div className="col-12 col-md-4">
    <div className="card mb-4">
  <img 
  className="card-img-top"
   src="home.png" height="220" width="220"
   alt="img"
   />
   <hr/>
  <div className="card-body">
    <h5 className="card-title">שיפוץ כללי</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blog/post6">
    <a className="btn btn-primary">Go somewhere </a>
    </Link> 
    </div>
    </div>
    </div> */}
    </div>
    </div>
    <ContactForm/>
</>
    )
}


export default index
