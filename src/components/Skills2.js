import React, { useEffect, useState } from 'react';
//  useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

import { IoLogoCss3 } from 'react-icons/io';
import { DiUbuntu } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [Css, setCss] = useState(0);
  const [Ubuntu, setUbuntu] = useState(0);
  const [Html, setHtml] = useState(0);
  const [Mongo, setMongo] = useState(0);
  const [Msql, setMsql] = useState(0);
  

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (Css < 85) {
          setCss(Css + 1);
        }
        if (Ubuntu < 85) {
          setUbuntu(Ubuntu + 1);
        }
        if (Html < 80) {
          setHtml(Html + 1);
        }
        if (Mongo < 25) {
          setMongo(Mongo + 1);
        }
        if (Msql < 15) {
          setMsql(Msql + 1);
        }
      
      }, 50);
    } else {
      setCss(0);
      setUbuntu(0);
      setMongo(0);
      setHtml(0);
      setMsql(0);
      
    }
  }, [inView, Css, Ubuntu, Html, Mongo, Msql]);

  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '16px',
    },
  };

  const color = '#111111';

  return (
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className='section font-primary'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Css}
              text={`${Css}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<IoLogoCss3 color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Ubuntu}
              text={`${Ubuntu}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<DiUbuntu color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Html}
              text={`${Html}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<AiFillHtml5 color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Mongo}
              text={`${Mongo}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<SiMongodb color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Msql}
              text={`${Msql}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<GrMysql color={color} size={50} />}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;