import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import Home from './components/home';


class App extends React.Component {
    render() {
        return(
        <Router>
            <Routes>
                <Route index path="/" element={<Login />}/>
                <Route path="/Home" element={<Home />}/>
            </Routes>
        </Router>
        );
    }
}

var  root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App/>);