import React from "react";

const Search = ({getGifs}) =>{
    return(
        <div className="padre-search" >
            <input
            className="input"
            type="text"
            placeholder="Buscar Gif"
            onChange={(e) => {getGifs(e.target.value)}}
            />
        </div>
    )
};

export {Search};