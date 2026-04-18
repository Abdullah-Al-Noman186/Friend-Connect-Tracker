import React from 'react';
import logoImg from '../../assets/logo-xl.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
  return (
    <div className="footer-container bg-[#244D3F] text-white py-4 justify-center items-center flex flex-col gap-4 w-auto">
      <img src={logoImg} alt="Logo" />
      <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <p className='text-gray-400'>Social Links</p>
      <div className='flex'>
        <img src={instagram} alt="Instagram" className="mr-2" />
        <img src={twitter} alt="Twitter" className="mr-2" />
        <img src={facebook} alt="Facebook" />
      </div>
      <div className="footer-bottom mt-4 text-center flex justify-between gap-200 ">
        <p className='text-gray-400'>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-4 justify-end text-gray-400"> 
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/cookies" className="hover:underline">Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;