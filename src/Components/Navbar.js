import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light bgColor spaceBetweenCss">
            <div>
            <h3 style={{ color: 'white' }}>TodoApplication</h3>
            </div>
            <div className="row">
                <p>About</p>
                <p>Services</p>
                <p>Project</p>
            </div>
        </nav>
    );
}

export default Navbar;