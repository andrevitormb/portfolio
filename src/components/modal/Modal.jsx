import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//SWIPER
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

//SASS
import '../../styles/components/modal.sass'

const Modal = ({isOpen, setModalOpen, children}) => {
    if(isOpen){
        return <div id='modal-container'>
             <div className='close' onClick={(setModalOpen)}>
                    X
                </div>
            <div className='modal-content'>
               
                <div>
                    {children}

                    <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">
                        <SwiperSlide>Project 1</SwiperSlide>
                        <SwiperSlide>Project 2</SwiperSlide>
                        <SwiperSlide>Project 3</SwiperSlide>
                        <SwiperSlide>Project 4</SwiperSlide>
                        <SwiperSlide>Project 5</SwiperSlide>
                        <SwiperSlide>Project 6</SwiperSlide>
                        <SwiperSlide>Project 7</SwiperSlide>
                        <SwiperSlide>Project 8</SwiperSlide>
                        <SwiperSlide>Project 9</SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </div>      
    }
    
    return null

}

export default Modal