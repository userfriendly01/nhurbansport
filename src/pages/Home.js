import React from 'react'
import Photo from '../components/Photo'

class Home extends React.Component {

    render(){
        return (
            <div>   
                <Photo type="header" img="https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg" />
                <span>
                <Photo type="mini" img="https://images-na.ssl-images-amazon.com/images/I/91FOeSuXvIL._SX522_.jpg" />
                </span>
            
            </div>
        );
    }

}

export default Home;