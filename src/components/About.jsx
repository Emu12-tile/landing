import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fadeIn } from "../variants";

const About = () => {
  const [aboutSections, setAboutSections] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/abouts?populate=*'); // Update the URL as needed
        setAboutSections(response.data.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutSections) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-14 p-4 max-w-5xl mx-auto space-y-6" id="about">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">Why do we use our API</h2>
      </div>
      {aboutSections.map((section, index) => (
        <div key={section.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center gap-8`}>
          <motion.div
            variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='md:w-1/2'>
            <img src={`http://localhost:1337${section.attributes.image.data[0].attributes.url}`} alt={section.attributes.image.data[0].attributes.name} />
          </motion.div>
          <motion.div
            variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='md:w-2/3'>
            <h2 className='md:text-4xl text-2xl font-bold text-primary mb-5 leading-normal'>
              {section.attributes.title}
            </h2>
            <p>{section.attributes.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default About;
