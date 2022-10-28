import React from 'react';

import { useState, useEffect} from 'react';

import { heroData } from '../data';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};


const Hero = () => {
  
  const[imgBG, setImgBG] = useState(false);
  
  useEffect(() => {
    setImgBG(true);
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1300) setImgBG(false);
      else setImgBG(true);
    })
    if(window.innerWidth < 1300) setImgBG(false);
    else setImgBG(true);
  });
  
  const { title, subtitle } = heroData;

  return (
    <section id='home' className={`${imgBG && 'bg-hero'} bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]`}>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
        <div className='text-[#1F1B57] text-center lg:text-left lg:max-w-[640px]'>
          <motion.h1
            variants={fadeIn('down')}
            className='h1'>{title}
          </motion.h1>
          <motion.p
            variants={fadeIn('down')}
            className='mb-8 lg:mb-16 max-w-lg leading-relaxed'>{subtitle}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
