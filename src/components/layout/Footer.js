import React from "react";

function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:jleejlee6@Gmail.com">jleejlee6@gmail.com</a>
            </div>
            <div>
                <h4>Kakao</h4>
                <a href="/">dnjstjr2314</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instargram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Reference</a></li>
                    <li><a href="/">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;