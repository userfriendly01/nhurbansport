import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div>
        <Header/>
        <Footer/>
    </div>
    ,
    document.getElementById("root")
);