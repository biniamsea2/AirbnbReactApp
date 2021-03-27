import React from 'react'
import './Home.css';
import Banner from "./Banner";
import Solidarity from "./Solidarity";

function Home() {
    return (
        <div className="home">
            <p>Home Component</p>
            <Banner/>
            <Solidarity/>
        
            
        </div>
    )
}

export default Home
