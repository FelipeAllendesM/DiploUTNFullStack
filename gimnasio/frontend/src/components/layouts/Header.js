import React from 'react';
import '../../styles/components/layout/Header.css';
import '../../App.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="/images/logo.png" width="100" alt="Goju Ryu Shorei Chile" />
                <h1>Goju Ryu Shorei Chile</h1>
            </div>
        </header>

    );
}

export default Header;