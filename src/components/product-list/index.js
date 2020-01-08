import React, {useState,useEffect} from 'react';
import {data} from "./data"

const ProductList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        setCharacters(data.results)
    },[]);

    return (
        <section className="grid">
            {characters.map((character,index) => (
                <div key={index}>
                    <img src={character.image} alt=""/>
                    <h4>{character.name}</h4>
                </div>
            ))}
        </section>
    )
};

export default ProductList;
