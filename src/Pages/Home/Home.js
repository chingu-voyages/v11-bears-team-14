import React from 'react';
import "./Home.css";
import DetailSearch from "../../components/DetailSearch/DetailSearch";


function Home() {
    return (
        <div className="home-container">
            <div className="container home-wrap">
                <DetailSearch />
            </div>
        </div>
    );
}

export default Home;
