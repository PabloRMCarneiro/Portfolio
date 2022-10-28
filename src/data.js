// import images
import Logo from '../src/img/header/logo.png';
import ProjectImg1 from '../src/img/gallery/7.png';
import ProjectImg2 from '../src/img/gallery/2.png';
import ProjectImg3 from '../src/img/gallery/pm.gif';
import ProjectImg5 from '../src/img/gallery/3png';
import ProjectImg6 from '../src/img/gallery/ispotify.gif';
import ProjectImg8 from '../src/img/gallery/cs.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '#home', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#skills', name: 'My Skils' },
    { href: '#projects', name: 'Projects' },
    { href: '#contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://github.com/PabloRMCarneiro', icon: <IoLogoGithub style={{color: "#1F1B57"}}/> },
  { href: 'https://www.linkedin.com/in/pablomagalhães', icon: <IoLogoLinkedin style={{color: "#1F1B57"}}/> },
  { href: 'mailto:pryancarneiro@gmail.com', icon: <AiOutlineMail style={{color: "#1F1B57"}}/> },
  { href: 'https://wa.me/5577988487960', icon: <IoLogoWhatsapp style={{color: "#1F1B57"}}/> },
];

export const heroData = {
  title: 'Pablo Magalhães',
  subtitle:
    'Front End Developer',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    "I have always enjoyed exploring new technologies and developing hardware and software solutions. I'm currently studying Control and Automation Engineering (UFMG) and I'm a Front End Developer with just under a year of experience.",
  subtitle2:
    "I'm very interested in learning more about infrastructure, clean code, design patterns, artificial intelligence, cloud architecture and UX/UI.",
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const projectData = {
  title: 'Check my Projects:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: ProjectImg1,
      original: ProjectImg1,
      width: 465,
      height: 412,
    },
    {
      src: ProjectImg2,
      original: ProjectImg2,
      width: 465,
      height: 540,
    },
    {
      src: ProjectImg3,
      original: ProjectImg3,
      width: 465*2,
      height: 412,
    },
    {
      src: ProjectImg5,
      original: ProjectImg5,
      width: 465,
      height: 540,
    },
    {
      src: ProjectImg6,
      original: ProjectImg6,
      width: 464*2,
      height: 412,
    },
    {
      src: ProjectImg8,
      original: ProjectImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler',
  btnText: 'Watch it now my pitch',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Back End Developer',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Full Stack Developer',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Contacts',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '65, Rua Flor de Fogo, Belo Horizonte, Brazil',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+55 (77) 98848-7960',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'pryancarneiro@gmail.com',
      },
      link: 'Get location',
      linkMaps: 'https://www.google.com/maps/place/R.+Fl%C3%B4r+de+Fogo,+65+-+Liberdade,+Belo+Horizonte+-+MG,+31270-217/@-19.8631952,-43.9593411,17z/data=!3m1!4b1!4m5!3m4!1s0xa69063edfa9b9f:0x132d0b03a90bb94c!8m2!3d-19.8631952!4d-43.9571524'
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About Pablo Magalhães',
    subtitle:
      'Front End Developer, student of Control and Automation Engineering and passionate about electronic music.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '65, Rua Flor de Fogo, Belo Horizonte, Brazil',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+55 (77) 98848-7960',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'pryancarneiro@gmail.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '#about', name: 'About me' },
      { href: '#projects', name: 'My projects' },
      { href: '#contact', name: 'Contact me' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
