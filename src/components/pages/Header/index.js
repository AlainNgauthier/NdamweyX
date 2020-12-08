import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header__content">
                    <Link to="/">NdamweyX</Link>
                </div>
            </div>
        )
    }
}

export default Header;