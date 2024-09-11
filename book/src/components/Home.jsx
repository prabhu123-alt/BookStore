import React from 'react'
import Navbar from './Navbar'
import Middle from './Middle'
import Title from './Title'
import Card from './Card'
import Footer from './Footer'

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Middle />
                <Title />
                <Card />
                <Footer />
            </div>
        </>
    )
}

export default Home