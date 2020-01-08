import React, {useState,useEffect} from 'react';
import "./styles.css"

const ProductList = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character").then(res => res.json()).then(res=> {
      setCharacters(res.results)
    }).catch(err => console.log(err))
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
