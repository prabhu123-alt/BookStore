import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function Course() {
    const [card, setcards] = useState([]);

    useEffect( async () => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:4002/card'); 
                setcards(response.data);
            } catch (error) {
                console.log('Error fetching data:', error); 
            }
        };
        getData();
    }, []);

    const filteredBooks = card.filter((item) => item.category !== 'free');
    console.log(filteredBooks);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-white-900 dark:text-black">
                            {filteredBooks.map((book, index) => (
                                <div key={index} className="card bg-base-100 w-full md:w-96 shadow-xl">
                                    <figure>
                                        <img className="w-full h-60"
                                            src={book.coverImage ||'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800'}
                                            alt={book.title }
                                            
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {book.title || "The God"}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>{book.description||"This book is best for envoriment"}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{book.category ||'The Nature'}</div>
                                           
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Course;
