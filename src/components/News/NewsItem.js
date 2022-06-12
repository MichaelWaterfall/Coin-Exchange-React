import React from 'react'
//import "./NewsItem.css";
import styled from "styled-components";

const NewsItem = styled.div`
    width: 500px;
    padding: 20px;
    border: 10px solid black;
    margin-bottom: 20px;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50%; 
    background-color: white;
    color: black;
`;

const NewsImage = styled.img`
    width: 400px;
`;

const newsItem = ({title, description, url, urlToImage}) => {
  return (
    <NewsItem>
        <NewsImage src={urlToImage} alt='New Image'></NewsImage>
        <h3>
            <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
    </NewsItem>
  )
}

export default newsItem;