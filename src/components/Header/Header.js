import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <span onClick={() => window.scroll(0, 0)} className="header">🎬 Movie Hub 🎥</span>
        </div>
    );
};

export default Header;