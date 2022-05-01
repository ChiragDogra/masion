import React, { useState } from 'react'
import './banner.css'
import { Button } from "@mui/material";
import Search from '../search/search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Search your dream home here</h1>
                <h5>
                    This is the place where your search for dream home ends.
                </h5>
                <Button onClick={() => history('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner