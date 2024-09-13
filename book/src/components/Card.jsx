import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';

function Card() { 

    const [card, setCard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:4002/card');
                setCard(response.data);
            } catch (error) {
                console.log('Error fetching data:', error); 
            }
        };

     
        getData();
    }, []);

    const freeBooks = card.filter(book => book.category === 'free');
    console.log(freeBooks); 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='max-w-screen-2xl container mx-auto md:px-20'>
                <Slider {...settings}>
                    {freeBooks.map(book => (
                        <Cards key={book.id} book={book} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Card; 
