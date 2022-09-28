import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slidestyle from '../homestyles/slide.module.css'

const slideImages = [
  "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Date-launch-post-whatsapp-banner-desktop.jpg?v=1654259038",
  "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Indian-plum-and-peach-banner.jpg?v=1653914762",
  "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Tarty-Sweetness-banner.jpg?v=1653914749",
  "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Delhi-launch-banner.jpg?v=1649917692",
  "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerArtboard_1.jpg?v=1650952002"
];

const properties={ 


  indicators: true,
};

// const slidestyle={

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "350px"
// }

const Slideshow = () => {
    return (
      <div className={slidestyle.top}>
        <Slide easing="ease"  {...properties}>
          {slideImages.map((el)=>
          {
            <div className={slidestyle.each}>
            <div style={{'backgroundImage': `url(${el})`}}>
           
            </div>
          </div>
          })}
            {/******************************************* */ }
         
          
          
        </Slide>
      </div>
    )
};

export default Slideshow;
