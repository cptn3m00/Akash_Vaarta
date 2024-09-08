import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center mt-12'>
      <div className='text-white sm:flex sm:justify-around about py-12 mt-8 w-full max-w-screen-xl px-4'>
        <div className='flex flex-col justify-around w-full'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Akash Samajdar, graduating in 2025 🎓 with a passion for crafting robust frontend systems, complemented by experience in backend systems as well. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/akash-samajdar-298107188/' target='_blank' rel='noopener noreferrer'>Software developer</a> I specialize in MERN stack🚀. 
              <br />
              ✍️ Beyond coding, I love Swimming and I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.
            </p>
            <ButtonLink
              url='https://docs.google.com/document/d/1nAzdo4nIyKzUgXNQw1-FuyIVZSmjbx8DdRRNreSiP6o/edit?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
