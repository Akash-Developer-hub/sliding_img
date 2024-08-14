import React, { useState } from 'react'
import { SliderImg } from './Slider'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
    
    
const Img_Slider = ({ slides }) => {
    const [current,setCurrent]= useState(0);
    const length = slides.length;
    
    const NextSlide =()=>{
        setCurrent(current === length -1 ? 0 : current + 1);
    }
    
    const PrevSlide =()=>{
        setCurrent(current === length-1? 0 : current-1);
    }
    
    if (!Array.isArray(slides)|| slides.length <=0){
        return null;
    }
    
    
    
    return (
    
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' on onClick={NextSlide}/>
            <FaArrowAltCircleRight className='right-arrow' on onClick={PrevSlide}/>
            {SliderImg.map((slide,index)=>{
                return(
    
                    <div className={index===current ?'slide active':'slide'}
                    key={index}>
                        {index === current &&(
                            <img src={slide.image} alt='travel img' className='image'/>
                        )}
                    </div>
                )
            })}
        </section>
      
    )
    }
    
    
    
export default Img_Slider
