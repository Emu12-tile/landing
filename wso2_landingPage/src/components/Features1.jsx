import { useState, useEffect } from "react";
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import classNames from 'classnames';

const Features = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState([]);
    const itemsPerPage = 4;

    useEffect(() => {
        fetchData(selectedCategory);
    }, [selectedCategory]);

    const fetchData = async (category) => {
        try {
            let endpoints = [];

            if (category === 'all') {
                endpoints = [
                    'http://localhost:1337/api/payments?populate=*',
                    'http://localhost:1337/api/securities?populate=*',
                    'http://localhost:1337/api/others?populate=*'
                ];
            } else if (category === 'payments') {
                endpoints = ['http://localhost:1337/api/payments?populate=*'];
            } else if (category === 'security') {
                endpoints = ['http://localhost:1337/api/securities?populate=*'];
            } else if (category === 'others') {
                endpoints = ['http://localhost:1337/api/others?populate=*'];
            }

            const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
            const data = responses.flatMap(response => response.data.data);
            setCardData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cardData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const categories = ['all', 'payments', 'security', 'others'];
    const categoryLabels = {
        'payments': '',
        'security': '',
        'others': '',
        'all': ''
    };

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-semibold text-black mt-14 mb-2">APIs built by developers, for developers</h2>
                <p>Find the product that is right for you</p>
                <div className="mt-16">
                    {categories.map((category) => (
                        <div key={category} className="inline-block text-center">
                            <button
                                onClick={() => handleCategoryChange(category)}
                                className={classNames('mr-8 text-2xl font-semibold btnprimary', { 'bg-primary text-white': selectedCategory === category })}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                            <div className="text-sm mt-2">{categoryLabels[category]}</div>
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.4 }}
                className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
            >
                {currentItems.map((item) => {
                    const { id, attributes } = item;
                    const { title, description, image } = attributes;

                    const imageUrl = image && image.data && image.data[0].attributes.url 
                        ? `http://localhost:1337${image.data[0].attributes.url}` 
                        : null;

                    return (
                        <div
                            key={id}
                            className="border shadow-2xl hover:-translate-y-4 transition-all duration-300 cursor-pointer py-5 md:px-3 px-4 rounded-lg shadow-3xl flex flex-col justify-between"
                            style={{ height: '400px' }} // Set fixed height for cards
                        >
                            {imageUrl && (
                                <div className="flex justify-center items-center mb-4">
                                    <img
                                        src={imageUrl}
                                        alt={title}
                                        className="w-full h-40 object-contain mx-auto rounded-t-lg" // Fixed height for images
                                    />
                                </div>
                            )}
                            <div className="flex-grow">
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center">{title}</h5>
                                <p className="text-tartiary text-center mt-4">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-2 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Features;
