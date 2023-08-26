// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <FaDatabase />,
    title: 'Backend',
    description: 'Specializzato nella codifica server-side per integrare le richieste del front end e dei dati contenuti in un database. Gestione dell API, di siti web e degli script sviluppati tramite codice backend come C#, Javascript, Python e SQL.',
  },
  {
    icon: <RxDesktop />,
    title: 'Frontend',
    description: 'Specializzato nello sviluppo di siti e applicazioni web client-side tramte l utilizzo di linguaggi come CSS, HTML, Javascript, React e framework come Next.js, Node.js, Tailwind, Styled Components e molti altri.',
  },
  {
    icon: <FaDiceD6 />,
    title: 'Unity',
    description: 'Specializzato nell utilizzo del software Unity per lo sviluppo di giochi e app interattive tramite l uso di script C# e librerie proprietarie Unity.',
  },
  {
    icon: <RxCrop />,
    title: 'Blender',
    description: 'Specializzato nell utilizzo del software Blender per la modellazione 3D di oggetti e scene',
  },
];

import { FaDatabase, FaDiceD6 } from "react-icons/fa";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },


  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className="h-[340px] sm:h-[540px]"
  >
    {serviceData.map((item, index) => {
      return <SwiperSlide key={index}>
        <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col
        gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
          <div className="text-4xl text-accent mb-4">{item.icon}</div>
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal">{item.description}</p>
          </div>
          <div className="text-3xl">
            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent
            transition-all duration-300"/>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default ServiceSlider;
