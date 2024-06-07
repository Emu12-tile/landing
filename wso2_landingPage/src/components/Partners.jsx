import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/partners?populate=*'); // Adjust this URL if needed
        const partnersData = response.data.data.map(partner => ({
          id: partner.id,
          imageUrl: partner.attributes.image.data[0].attributes.url,
        }));
        setPartners(partnersData);
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div id="partners" className="bg-[#f7f7f7]">
      <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Integration Partners
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Here are some of our integration partners.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="relative w-full">
            <div className="flex animate-loop-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white w-[250px] h-[100px] p-5 flex items-center justify-center"
                >
                  <img
                    src={`http://localhost:1337${partner.imageUrl}`} // Prefix with the Strapi base URL
                    alt={`Partner ${index + 1}`}
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
