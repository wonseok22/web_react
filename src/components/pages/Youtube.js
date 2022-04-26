import React, { useEffect, useState } from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
//require('dotenv').config()

function Youtube() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
      console.log(setVideos)
  }
  useEffect(()=> {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=webstoryboy&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
  }, []);
  return (
    <>
        <Header/>
        <Contents>
            <Title title={["youtube","reference"]} />
            <div className='container'>
            <YoutubeSearch onSearch={search} />
            <YoutubeList videos={videos} />
            </div>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}
export default Youtube;