import React from 'react'
import Image from '../../public/book.jpg'

function Middle() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 flex gap-9 justify-between mt-20'>
                <div className='w-full md:w-1/2 mt-9'>
                    <h1 className='text-lg font-bold'>
                        <span className="text-red-500 mr-3">"The Enchanted Bookstore:</span>Where Stories Come Alive and Dreams Take Flight in a World of Endless Wonder"
                    </h1>
                    <p className='mt-4 text-black-400 font-serif leading-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo magni. Eveniet, odio! Eaque, vitae. Esse pariatur perspiciatis iste explicabo illum velit perferendis officiis aliquam dignissimos cumque dolores, ipsa aliquid!
                        Discover a world where stories come alive and dreams take flight. At The Enchanted Bookstore, we offer a magical escape into realms of imagination and adventure. Our curated selection features timeless classics, contemporary bestsellers, and hidden gems that cater to readers of all ages. Whether you’re seeking an enthralling novel, a cozy nook to get lost in, or unique literary gifts, our store promises an enchanting experience with every visit. Step inside and let your journey begin!
                    </p>
                    <label className="input input-bordered flex items-center gap-2 mt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-secondary mt-3">Get Started</button>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img
                        src={Image}
                        alt='book'
                        className='max-w-full h-auto rounded-lg mt-4 shadow-custom'
                    />
                </div>
            </div>

        </>
    )
}

export default Middle