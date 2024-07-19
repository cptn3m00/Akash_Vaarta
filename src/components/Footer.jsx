import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer bg-slate-900 p-4'>
      <div className='footer-content flex flex-wrap justify-center sm:justify-between items-center gap-4'>
        <p className='footer-text text-white text-center w-full sm:w-auto font-light'>© {year} Akash. All rights reserved.</p>
        <div className='footer-icons text-white flex justify-around sm:w-auto w-full'>
          <a href="mailto:akashtjsamajdar@gmail.com" className='icon-link'>
            <FiMail className='text-xl' />
          </a>
          <a href="https://www.linkedin.com/in/akash-samajdar-298107188/" target='_blank' className='icon-link'>
            <AiFillLinkedin className='text-xl' />
          </a>
          <a href="https://github.com/cptn3m00" target='_blank' className='icon-link'>
            <FaGithub className='text-xl' />
          </a>
          <a href="https://twitter.com/akashtjsamajdar" target="_blank" rel="noreferrer" className="icon-link">
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
