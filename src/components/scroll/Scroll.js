import React from 'react'
import './Scroll.scss'

const Scroll = (props) => {
    return (
        <div className="hide-scrollbar container-scroll">
            {props.children}
        </div>
    );
};

export default Scroll;