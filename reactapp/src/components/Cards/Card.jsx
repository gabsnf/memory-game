import { useEffect } from "react";
import { useState } from "react";
import "./Card.css";

 
// import CardYugioh from "../../assets/yugioh.png";
// import Frota from "../../assets/frotaCard.jpeg";
// import Paras from "../../assets/paras.jpeg";

// const imagens = [CardYugioh, Frota, Paras];

export function Card({cartas, card, setCartas}) {
const backCard = '../src/assets/yugioh.png'

function flipCard(param){
  let current = cartas.find(i => i.id === card.id)
  current.visible = param
  setCartas([...cartas])
}

useEffect(() =>{
  console.log(card)
},[cartas])


return(
  <div className="container" onClick={() => {
    flipCard(!card.visible)
    }}>
    {
      !card.visible ? (
        <img src={backCard} />
      ): (
        <img src={card.img} />
      )
    }


  </div>
  )
}






{/* <div className="container">
  <div id="card">
    <div id="cardInner">
      <div id="frontCard">
        <img id="imgYu" src={imagens[0]} alt="" />
      </div>
      <div id="backCard">
      <img src={imagens[1]} alt="" />
      </div>
    </div>
  </div>

  <div id="card2">
    <div id="cardInner2">
      <div id="frontCard2">
        <img id="imgYu2" src={imagens[0]} alt="" />
      </div>
      <div id="backCard2">
        <img src={imagens[2]} alt="" />
      </div>
    </div>
  </div>

</div>  */}