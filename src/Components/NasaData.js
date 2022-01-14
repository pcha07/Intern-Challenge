import React from 'react';
import {useState} from 'react';
import Loading from './Loading';
import SingleItem from './SingleItem';
import axios from 'axios';
const NasaData = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=kqRcX7b86yOiAMNuTBBmBIHycvxAVrNbz3g6rsgg';
    const [count,setCount] = useState(0);
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);

    const removeItem = (date) => {
        const newItems = data.filter((item) => item.date !== date);
        setData(newItems);
    }

    const fetchData = async(count) => {
        try {
            setLoading(true);
            const response = (await axios.get(`${url}&count=${count}`)).data
            setData(response);
            setLoading(false);
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }
    if(loading) {
        return <Loading/>
    }
    return (
        <>
        <section>
            <div className="input-box">
                <h4>Enter how many images you would like to view</h4>
                <div className="search-box">
                    <input type="text" onChange={(e) => setCount(e.target.value)}/>
                </div>
                <button onClick={() => fetchData(count)} className="submit-btn">Generate</button>
                <p className="error-msg">{error && 'amount must be positive, less than 100, and a digit!'}</p>
            </div>
            <div>
                {data.map((item) => {
                    const {date,explanation,hdurl,title,url} = item;
                    return (
                    <SingleItem key={date} date={date} explanation={explanation} hdurl={hdurl} title={title} url={url} removeItem={removeItem}/>
                    )
                })}
            </div>
        </section> 
        </>
    )
}

export default NasaData;