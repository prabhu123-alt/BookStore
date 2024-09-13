import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Navbar />
            <div className='relative min-h-screen flex flex-col text-white'>
                {/* Background Image */}
                <div 
                    className='absolute inset-0 bg-cover bg-center' 
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg?auto=compress&cs=tinysrgb&w=800')" }}
                >
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                </div>

                {/* Content */}
                <div className='relative z-10 flex-grow flex flex-col items-center justify-center'>
                    <div className="avatar mb-10 flex justify-center items-center">
                        <div className="ring-primary ring-offset-base-100 w-52 rounded-full ring ring-offset-2">
                            <img src='/IMG_0018.JPG' alt="Author" className='rounded-full' />
                        </div>
                    </div>
                    <div className="author-info text-center">
                        <h2 className="text-3xl text-red-400 font-bold mb-4">About the Author</h2>
                        <p className="text-lg mb-4">
                            Hello! I'm Prabhunarayan Singh, a passionate writer and developer. I love creating E-commerce solutions and building web applications.
                        </p>
                        <p className="text-lg">
                            Feel free to reach out to me at: 
                            <a href="mailto:prabhunarayans842@gmail.com" className="text-blue-400 hover:text-blue-600">
                                Prabhunarayans842@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                 
            </div>
            <Footer />
        </>
    );
}

export default About;
