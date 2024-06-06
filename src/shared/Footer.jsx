import logo from '../assets/logo.svg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [platformLinks, setPlatformLinks] = useState([]);
  const [helpLinks, setHelpLinks] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const platformResponse = await axios.get('http://localhost:1337/api/platforms');
        setPlatformLinks(platformResponse.data.data);

        const helpResponse = await axios.get('http://localhost:1337/api/helps');
        setHelpLinks(helpResponse.data.data);


        const contactResponse = await axios.get('http://localhost:1337/api/contacts');
        setContacts(contactResponse.data.data);

      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="bg-[#00ADEF] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white">
      <div className='my-12 flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-8'>
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img src={logo} alt="" className="w-10 inline-block items-center" /><span className='text-white'>COOP DEVELOPERS</span>
          </a>
          <p>Create a collaborative tech ecosystem that propels both our ventures to new heights.</p>
          <div>
            <input type="email" name='email' id='email' placeholder='Your email' className='bg-[#9a7af159] text-white py-2 px-4 rounded-md focus:outline-none' />
            <input type="submit" value='Subscribe' className='bg-secondary rounded-md -ml-2y-2 px-4 py-2 rounded focus:outline-none hover:bg-white hover:text-primary duration-300 transition-all' />
          </div>
        </div>
        <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Platform</h4>
            <ul className='space-y-3'>
              {platformLinks.map(link => (
                <li key={`platform-${link.id}`}>
                  <a href="/" className='block hover:text-gray-300'>{link.attributes.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Help</h4>
            <ul className='space-y-3'>
              {helpLinks.map(link => (
                <li key={`help-${link.id}`}>
                  <a href="/" className='block hover:text-gray-300'>{link.attributes.Questions}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Contacts</h4>
            <ul className='space-y-3'>
              {contacts.map(contact => (
                <li key={`contact-${contact.id}`}>
                  <span className='block hover:text-gray-300'>{contact.attributes.contacts}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 '>
        <p>Copyright © 2024 Cooperative Bank of Oromia. All Rights Reserved | Designed by <span className='text-tartiary'> COOP DxValley</span> </p>
        <div className=' flex items-center space-x-5'>
          <FaFacebook className='w-8 cursor-pointer hover:-translate-y-1' />
          <FaInstagram className='w-8 cursor-pointer hover:-translate-y-1' />
          <FaTwitter className='w-8 cursor-pointer hover:-translate-y-1' />
          <FaLinkedin className='w-8 cursor-pointer hover:-translate-y-1' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
