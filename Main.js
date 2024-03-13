import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'



export const Main = () => {
    const [url, setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e164e718728e1033d16e561ae0bd84c4&hash=53406b0ed2a69a7a08fb30e1f5112dd4")
    const [item, setItem] = useState();
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results);
        } 
        fetch();
    }, [url])

    return (
        <>
            <div className='header'>
                <div className='bg'>
                    <img src="./Images/test2.jpg" alt='' />
                </div>
                <div className='search-bar'>
                    <img src='./logo192.png' alt='logo' />
                    <input type='search' placeholder='Search Here' 
                    className='search' />
                </div>
            </div>
            <div className='content'>
                {
                    (!item)?<p>Not Found</p>: <Card data={item}/>
                }
            </div>
        </>
    )
} 