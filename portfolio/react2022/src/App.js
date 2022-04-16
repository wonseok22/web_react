import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Script from "./components/pages/Script";
import Youtube from "./components/pages/Youtube";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (  
      <>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/reference" component={Reference}/>
        <Route path="/script" component={Script}/>
        <Route path="/youtube" component={Youtube}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
      </>
  );
}

export default App;
