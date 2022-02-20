import React from "react";

const Gif = ({title, gifImage, gifUrl}) => {
    return(
        <div className="padre">
            <img src={gifImage} className="imagen img"/>
            <div className="hijo"> 
                <h5 className="titulo">{title}</h5>
                <a href={gifUrl} className="url">Ver GIF</a>
            </div>
        </div>
    )
};

export {Gif};