import React from 'react'
import './Scroll.scss'

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', height:'32em'}} className="hide-scrollbar">
            {props.children}
        </div>
    );
};

export default Scroll;