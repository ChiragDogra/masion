import React from 'react';
import Header from '../../components/header/Header';
import './Home.css';

export default function Home(){
    return(
        <div className="home">
            <Header/>
            <h1>This is home</h1>
        </div>
    )
}