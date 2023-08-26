// testimonial data
const testimonialSlider = [
  {
    image: '/logogame.png',
    name: 'Game Programmer',
    position: 'Modalitá ibrida',
    message:
      'Con l obiettivo di diventare un programmatore videoludico per creare esperienze di gioco innovative ed entrare a far parte delle grandi realtá aziendali.',
  },
  {
    image: '/logobackend.png',
    name: 'Programmatore Backend Senior',
    position: 'Modalitá ibrida',
    message:
      'Con l obiettivo di diventare un programmatore backend senior, padroneggiando tecnologie complesse e strategie di ottimizzazione per sviluppare sistemi robusti.',
  },
  {
    image: '/logofrontend.png',
    name: 'Programmatore Frontend Senior',
    position: 'Modalitá ibrida',
    message:
      'Con l obiettivo di poter guidare lo sviluppo di esperienze web straordinarie e intuitive, contribuendo al successo dei progetti con la mia esperienza.',
  },
];


import { FaDatabase, FaDiceD6 } from "react-icons/fa";
import {FaQuoteLeft} from 'react-icons/fa';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation,Pagination } from "swiper";
import Image from "next/image";

const TestimonalSlider = () => {
  return <Swiper 
  navigation={true}
  pagination={{
    clickable: true
  }}
  modules={[Navigation, Pagination]}
  className="h-[500px]"
  >
    {testimonialSlider.map((goals, index) => {
      return <SwiperSlide key={index}>
        <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              <div className="mb-2 mx-auto">
                <Image src={goals.image} width={100} height={100} alt=""/>
              </div>
              <div className="text-lg">{goals.name}</div>
              <div className="text-[12px] uppercase font-extralight tracking-widest">{goals.position}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center before:w-[1px]
          xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
            <div className="mb-4">
              <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
            </div>
            <div className="xl:text-lg text-center md:text-left">{goals.message}</div>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default TestimonalSlider;


