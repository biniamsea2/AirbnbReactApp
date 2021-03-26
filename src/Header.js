import React from 'react'
import './Header.css';
import Search from "@material-ui/icons/Search";


function Header() {
    return (
        <div className="header">
            <img className ="header_logo"src="https://www.wfla.com/wp-content/uploads/sites/71/2020/03/AIRBNB.jpg" alt="airbnb logo"/>
        
        
        <div className="header_center">
            <input type="text"/>
            <Search/>

        </div>
        
        
        
        </div>
    )
}

export default Header
