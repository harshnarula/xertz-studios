import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-blue-900">
      {/* Desktop Footer */}
      <footer className="hidden lg:flex flex-row justify-evenly items-center h-auto   text-white rounded-t-[250px] py-8">
        <div className='flex flex-col w-auto h-auto justify-center items-center'>
          <p className='text-xl mb-2 font-varela'>Logo</p>
          <p className='text-xl max-w-[300px] font-varela text-center '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore assumenda dolore. Laboriosam, excepturi? Quisquam nam vitae doloribus? Ab odit et quo eius similique. Saepe ea veniam vitae esse quae voluptatem impedit.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='mb-2 font-varela'>Xertz Studios</p>
          <p className='mb-2 font-varela'>example@gmail.com</p>
          <p className='mb-2 font-varela'>Srinagar, India</p>
          <p className='mb-2 font-varela'>+91212495120</p>
        </div>
        <div className='flex flex-col w-auto h-auto justify-center items-center'>
          <div className='flex flex-row mb-2'>
            <a href="#" className='mx-2 font-varela'>About</a>
            <a href="#" className='mx-2 font-varela'>Careers</a>
            <a href="#" className='mx-2 font-varela'>Contact</a>
          </div>
          <div className='flex flex-row'>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaInstagram className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaFacebookF className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaLinkedinIn className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaTwitter className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="lg:hidden flex flex-col justify-center items-center h-auto bg-blue-900 text-white rounded-t-[100px] py-8">
        <div className='flex flex-col w-auto h-auto justify-center items-center'>
          <p className='text-xl mb-2'>Logo</p>
          <p className='text-xl max-w-[300px] font-varela text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore assumenda dolore. Laboriosam, excepturi? Quisquam nam vitae doloribus? Ab odit et quo eius similique. Saepe ea veniam vitae esse quae voluptatem impedit.
          </p>
        </div>
        <div className='flex flex-col m-2 justify-center items-center'>
          <p className='mb-2 font-varela'>Xertz Studios</p>
          <p className='mb-2 font-varela'>example@gmail.com</p>
          <p className='mb-2 font-varela'>Srinagar, India</p>
          <p className='mb-2 font-varela'>+91212495120</p>
        </div>
        <div className='flex flex-col w-auto h-auto justify-center items-center'>
          <div className='flex flex-row mb-2'>
            <a href="#" className='mx-2 font-varela'>About</a>
            <a href="#" className='mx-2 font-varela'>Careers</a>
            <a href="#" className='mx-2 font-varela'>Contact</a>
          </div>
          <div className='flex flex-row'>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaInstagram className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaFacebookF className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaLinkedinIn className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
            <div className="group flex justify-center items-center rounded-xl mx-2 bg-blue-900 hover:bg-blue-700 border-2 p-2 border-blue-400 transition-colors duration-300">
              <FaTwitter className="text-2xl text-white group-hover:text-white transition-colors duration-300 group-hover:animate-bounceSmooth" />
            </div>
          </div>
        </div>
      </footer>

      <p className='flex justify-center items-center bg-blue-900 py-2 font-varela text-white'>
        &copy; 2023 || All Rights Reserved by Xertz Studios
      </p>
    </div>
  );
};

export default Footer;
