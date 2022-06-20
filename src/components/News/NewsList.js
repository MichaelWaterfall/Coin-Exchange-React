import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import styled from "styled-components";
//import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';

const Div = styled.div`
    border: 10px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const getArticles = async () => {   
            const response = await Axios.get(
                "http://localhost:5000/news"
            );
                
            setArticles(response.data.articles);
            console.log("test");
            console.log(response);
        };  
        
        getArticles();
    }, []);

    return (<Div>
        {articles.map(({title, description, url, urlToImage}) => (
            <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
        ))}
    </Div>);
}

export default NewsList;