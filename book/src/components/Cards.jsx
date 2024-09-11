import React from 'react';

function Cards({ book }) {
    return (
        <>
            <div className="card max-w-screen-2xl container mx-auto  bg-base-100 w-96 mb-3  h-96 shadow-xl mt-9 flex  flex-col dark:bg-white-900 dark:text-black    ">

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
                        {/* Add more badges or actions based on book data */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
