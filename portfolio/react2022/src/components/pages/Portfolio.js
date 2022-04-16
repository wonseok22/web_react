import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer"
import PortCont from "../includes/PortCont";
import ContTitle from "../includes/ContTitle";
function Portfolio(){
    return (
        <>
        <Header />
        <Contents>
            <ContTitle title={["Portfolio","site"]} color={"light"}/>
            {/* <section className='cont__title'>
                <div className="container">
                    <h1>
                        <strong>portfolio</strong> 
                        <em>site</em>
                    </h1>
                </div>
            </section> */}
            <PortCont/>
            
            <section className='prot_contact'></section>
            {/* <ContContact> */}
        </Contents>
        <Footer />
    </>
    )
}
export default Portfolio;