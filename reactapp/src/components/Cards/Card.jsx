import { useEffect } from "react";
import { useState } from "react";
import "./Card.css";

export function Card({cartas, card, setCartas}) {
const backCard = '../src/assets/yugioh.png'

function flipCard(param){
  let current = cartas.find(i => i.id === card.id)
  current.visible = param
  setCartas([...cartas])

  if(card.visible == card.visible){
    setTimeout(() => {}, 2000)
    !card.visible
  }
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
