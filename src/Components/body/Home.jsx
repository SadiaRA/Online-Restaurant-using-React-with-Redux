import React, { Component } from 'react';
import Loader from './Loader'




class Home extends Component {
    
    render() {
        document.title = "Sadia's Online Restaurant";
        return (
            <div>

               <Loader/>
            </div>
        );
    }
}

export default Home;
