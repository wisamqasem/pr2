import React, { useState } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import axios from 'axios'


export const gotStaticpaths = async()=>{
  
}
const Post = () => {
    const [images, setImages] = useState([]);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const itemId = urlParams.get('id');
  ///////////////////////////////////////////////////////////////////////////// GET DATA FROM FIREBASE FROM HERE..............
  if(images.length==0){
    axios.get("https://firestore.googleapis.com/v1/projects/next-c8eaf/databases/(default)/documents/data/"+itemId).then(res=>{
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
   
      arr =    documentToJson(res.data.fields)
      console.log("the images : ",arr.images)
    //   res.data.map((x)=>{
    //     arr=[...arr, documentToJson(x.fields)]
    //         })
    
    //       //  productList=[...arr]
    
           setImages(arr.images)




     })

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
      <>
     
     {/* <!-- Gallery --> */}
   
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={images[0]}
      data-mdb-img="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
       src={images[1]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
       src={images[2]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src={images[3]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
       src={images[4]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
       src={images[5]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <img
       src={images[6]}
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>
</div>

{/* <!-- Gallery --> */}



      
      
      </>
    //  <CardGroup>
    //     <Card>
    //     <Image src="/bord.png" fluid  width="250" height="250"/>
          
    //       <Card.Body>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This is a wider card with supporting text below as a natural lead-in to
    //           additional content. This content is a little bit longer.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </Card.Footer>
    //     </Card>
    //     <Card>
    //     <Image src="/bord2.png" fluid width="250" height="250" />
          
    //       <Card.Body>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This card has supporting text below as a natural lead-in to additional
    //           content.{' '}
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </Card.Footer>
    //     </Card>
    //     <Card>
    //     <Image src="/bord3.png" fluid  width="250" height="250"/>
          
    //       <Card.Body>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This is a wider card with supporting text below as a natural lead-in to
    //           additional content. This card has even longer content than the first to
    //           show that equal height action.
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </Card.Footer>
    //     </Card>
    //   </CardGroup>
    
    )
}

export default Post
