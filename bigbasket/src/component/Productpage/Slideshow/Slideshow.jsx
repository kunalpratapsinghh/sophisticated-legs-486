import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slidestyle from './slideshow.module.css'

const slideImages = [
 {id:1,image:"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP4834-1200X300-01stSEP22.jpg"},
 {id:2,image:"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3507-1200X300-22ndJul22.jpg"},
 {id:3,image:"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3540-1200X300-20thJun22.jpg"},
 {id:4,image:"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3469-1200X300-16thJun22.jpg"},
 {id:5,image:"https://www.bigbasket.com/media/uploads/banner_images/YXNP5333-1200x300-070922.jpg"},
 {id:6,image:"https://www.bigbasket.com/media/uploads/banner_images/fresho-fnv-Bangalore-1200x300-27thSEP22.jpeg"},
 {id:7,image:"https://www.bigbasket.com/media/uploads/banner_images/YXNP5712_1200x300_150922.jpg"},
 {id:8,image:"https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP4836-1200X300-01stSEP22.jpg"}
];

const properties={ 
  indicators: true,
};


const Slideshow = () => {
    return (
     <div className={slidestyle.top}>
        <Slide easing="ease"  {...properties}>
          {slideImages.map((el)=>
          (
            <div className={slidestyle.each} key={el.id}>
            <div style={{'backgroundImage': `url(${el.image})`}}>
           </div>
          </div>
          ))}
        </Slide>
       </div>
    )
};

export default Slideshow;
