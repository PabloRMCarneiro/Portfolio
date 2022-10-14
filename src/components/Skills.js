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

import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';

import { FaReact } from 'react-icons/fa';

import { TbBrandNextjs } from 'react-icons/tb';

import { SiTypescript } from 'react-icons/si'


const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [Ri, setRi] = useState(0);
  const [Js, setJs] = useState(0);
  const [Next, setNext] = useState(0);
  const [Ts, setTs] = useState(0);
  const [Node, setNode] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (Ri < 90) {
          setRi(Ri + 1);
        }
        if (Js < 95) {
          setJs(Js + 1);
        }
        if (Next < 75) {
          setNext(Next + 1);
        }
        if (Ts < 80) {
          setTs(Ts + 1);
        }
        if (Node < 65) {
          setNode(Node + 1);
        }
        
      }, 50);
    } else {
      setRi(0);
      setJs(0);
      setNext(0);
      setTs(0);
      setNode(0);
    }
  }, [inView, Ri, Js, Next, Ts, Node]);

  const styles = {
    path: {
      stroke: '#3A41E4',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '16px',
    },
  };

  const color = '#3A41E4';

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
        <p className='h2 max-w-[370px] lg:mb-20'>My Skills:</p>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={Ri}
              text={`${Ri}%`}
            />
            <div className='font-light tracking-[1.2px] text-center '>
              {<FaReact color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={Js}
              text={`${Js}%`}
            />
            <div className='font-light tracking-[1.2px] text-center'>
              {<IoLogoJavascript color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={Next}
              text={`${Next}%`}
            />
            <div className='font-light tracking-[1.2px] text-center'>
              {<TbBrandNextjs color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={Ts}
              text={`${Ts}%`}
              />
            <div className='font-light tracking-[1.2px] text-center'>
              {<SiTypescript color={color} size={50} />}
            </div>
          </div>
          <div className='w-[150px] lg:w-[175px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={Node}
              text={`${Node}%`}
              />
            <div className='font-light tracking-[1.2px] text-center'>
              {<IoLogoNodejs color={color} size={50} />}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;