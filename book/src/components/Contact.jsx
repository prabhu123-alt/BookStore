import React, { useEffect } from 'react';
import Navbar from './Navbar';

function Contact() {
    useEffect(() => {
        const modal = document.getElementById('my_modal_6');
        if (modal) {
            modal.showModal();
        }
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <div className="mt-56">
                    <dialog id="my_modal_6" className="modal">
                        <div className="modal-box ">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg flex ">Contact !</h3>
                            <p className="py-4">Name</p>
                            <input type="text" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
                            <p className="py-4">Email</p>
                            <input type="Email" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
                            <p className="py-4">Description</p>     
                            <textarea className="textarea textarea-secondary  w-80" placeholder="Enter your text"></textarea>
                            <div className='flex mt-6'>
                            <button className="btn  hover:text-white  hover:bg-pink-600 btn-active btn-primary">Primary</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
}

export default Contact;
