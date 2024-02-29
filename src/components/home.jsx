import React from "react";
import companyLogo from '../images/logo.png';



class Home extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <header>
                    <div className="logo ">
                        <img src={companyLogo}/>
                    </div>
                </header>
            </div>
        )
    }
} 

export default Home;