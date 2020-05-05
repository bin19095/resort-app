import React, {Component} from 'react';
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
class Error extends Component {
    render() {
        return (
           <Hero>
               <Banner title="404" sbutitles="page not found">
                   <Link to="/" className="btn-primary">
                       return home
                   </Link>
               </Banner>
           </Hero>
        );
    }
}

export default Error;