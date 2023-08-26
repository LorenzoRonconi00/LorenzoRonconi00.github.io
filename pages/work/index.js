import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Computer from '../../components/Computer';

const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left
        mb-4 xl:mb-0'>
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" 
          className='h2 xl:mt-12'>I miei <span className='text-accent'>progetti</span></motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Formato su ogni aspetto 
            della programmazione, offro i miei servizi in progetti
            riguardanti sia backend che frontend. Arricchito anche dalla conoscenza della
            programmazione e della modellazione videoludica come passione ed obiettivo personale.
          </motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='w-full xl:max-w-[65%]'>
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Computer />
  </div>;
};

export default Work;

