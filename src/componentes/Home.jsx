import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/*Componentes*/
import { Search } from "./Search";
import { Gif } from "./Gif";

const Home = () => {
    
    const [gifts, setGifts] = useState ([])

    const getGifs = (search) => {

        const API_KEY = "R6V6qJVJ3T5fa91Yrx51Skncf9FAmMVo"
        const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=48&offset=0&rating=g&lang=en`

        fetch(API_URL)
        .then(response => response.json())
        .then(responseJson => setGifts(responseJson.data));
    };

    useEffect(() =>{
        getGifs("Pikachu") //stitch
    }, []);

    //gifts && console.log(gifts);

    return (
        <div>
            <Search getGifs={getGifs} />

            <div className="wrap">
                {gifts.map((gif) => (
                    <Gif
                        gifImage={gif.images.downsized_medium.url}
                        title={gif.title}
                        gifUrl={gif.url}
                        key={gif.id}
                    />
                ))}
            </div>
        </div>
    );
};

export {Home};