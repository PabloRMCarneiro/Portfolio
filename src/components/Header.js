import { React, useState, useEffect } from 'react';

import { headerData, navData } from '../data';

import Nav from './Nav';
import Socials from './Socials';

import { TiThMenuOutline } from 'react-icons/ti'

const Header = () => {

  const { logo } = headerData;

  const { items } = navData;


  const [isActive, setIsActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {

    console.log(localStorage.getItem('navMobile'))

    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1300) setNavMobile(false);
    })
  });

  return (
    <header className={`${isActive
      ? 'h-[100px] lg:h-[110px] shadow-lg'
      : 'h-[120px] lg:h-[150px]'
      } bg-white fixed left-0 right-0 z-10 max-w-[1920px]
        w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        <a href="/">
          <img src={logo} alt="logo" className='w-[210px]' />
        </a>
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        <div
          onClick={() => {
            localStorage.setItem('navMobile', 1)
            setNavMobile(!navMobile)
          }}
          className='xl:hidden absolute right-[5%] bg-[#1F1B57] p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className='text-3xl text-white' />
        </div>
        <div className={`${navMobile ? 'max-h-full' : 'max-h-0'}
        ${isActive
            ? 'top-[100px] lg:top-[110px]'
            : 'top-[120px] lg:top-[150px]'
          }
        fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}>
          <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden bg-white'>
            <ul className='flex flex-col justify-center items-center gap-y-6 py-6 mb-8'>
              {items.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={(e) => setNavMobile(false)}
                      className='text-2xl font-primary uppercase' href={item.href}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
            <div className='text-2xl'>
              <Socials />
            </div>
          </nav>
        </div>
        <div className='hidden xl:flex'>
          <Socials />
        </div>
      </div>
    </header >
  );
};

export default Header;
