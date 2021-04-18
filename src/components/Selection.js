import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({applyColor}) => {
    const [bg, setbg] = useState({background : ''});
    
    return (
        <div className="fix-box" style={bg} onClick={()=>applyColor(setbg)}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
