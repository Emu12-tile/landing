import React from 'react';
import Slider from 'react-slick';
import useFetch from '../hooks/useFetch';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/api/heroes?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {data.map((item) => {
            const { id, attributes } = item;
            const { title, description, image } = attributes;

            return (
              <div key={id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{title}</h1>
                    <div className="text-lg">
                      {description?.map((desc, index) => (
                        <p key={index}>{desc.children[0].text}</p>
                      ))}
                    </div>
                    <div>
                      <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Get Started</button>
                    </div>
                  </div>
                  {image && image.data && (
                    <div className="flex justify-center items-center">
                      <img src={`http://localhost:1337${image.data.attributes.url}`} alt={title} className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto"/>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
