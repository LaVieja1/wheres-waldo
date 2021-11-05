import React from 'react';

const Header = (props) => {
    return (
        <header classname ="z-50 bg-white shadow-sm w-full fixed">
            {props.children}
        </header>
    );
};

export default Header;