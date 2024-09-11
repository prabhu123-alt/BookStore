import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bookData from '../../public/book.json';

function Course() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(bookData);
    }, []);

    const filteredBooks = books.filter((item) => item.category !== 'free');

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
                                        <img
                                            src={book.coverImage}
                                            alt={book.title || "Book cover"}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {book.title || "Book Title"}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>{book.description || "Book description"}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{book.category || "Category"}</div>
                                           
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
