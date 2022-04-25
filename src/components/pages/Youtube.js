import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";
import axios from "axios";
import { gsap } from "gsap";

class Youtube extends React.Component {
    state = {
        isLoading: true,
        lists : [],
        searchs : []
    }
    mainAnimation = () => {
        setTimeout(() => { 
            gsap.to("#header", {
                duration: 0.8, 
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8, 
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
        }, 10)
    }
    getYoutubes = async () => {
        const lists = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&key=AIzaSyBul_6XC_Pfc3k0LzfmKNVIVbB3AbBTIyI&q=webstoryboy&type=video");
        console.log(lists);
        this.setState({lists, isLoading : false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getYoutubes();
        }, 2000);
    }

    render() {
        const {isLoading, lists} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="black" />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Youtube","reference"]} />
                            <YoutubeCont lists={lists}/>
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}


export default Youtube;