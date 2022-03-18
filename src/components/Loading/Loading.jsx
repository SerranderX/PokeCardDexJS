import React from 'react';
import './Loading.css';

const Loading = () => {

    console.log(window)

    return (
        <div className="Loading-container">
            <div className="load">
                <div className="load-one"></div>
                <div className="load-two"></div>
                <div className="load-three"></div>
            </div>
        </div>
    );
};

export default Loading;