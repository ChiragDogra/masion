import React from 'react';
import Banner from '../../components/banner/banner';
import Header from '../../components/header/Header';
import './Home.css';

export default function Home(){
    return(
        <div className="home">
            <Header/>
            <Banner/>
        </div>
    )
}