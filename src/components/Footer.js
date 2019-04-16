import React from 'react'
import About from '../pages/About.js'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        //this.updateView = this.updateView.bind(this);
    }

    render(){
        return (
            <div>   
                <h1>I'm a Test Footer! Woohoo!</h1>
                <button onClick={this.props.updateView(<About />)}></button>
            </div>
        );
    }

}

export default Footer;