import { useEffect } from "react";
import { useState } from "react";
import "./Card.css";
import { App } from '../../App'

export function Card({cartas, card, setCartas, setOpenCards, openCards}){
  const backCard = '../src/assets/yugioh.png'


function flipCard(param){
  let current = cartas.find(i => i.id === card.id)
  let currentVal = cartas.find(value => value.value === card.value)
  current.visible = param

  setCartas([...cartas])

}

// useEffect(() =>{
 
// console.log(compare);

// },[compare])


return(
  <div className="container" onClick={() => {
    flipCard(!card.visible)
    if(card.visible){
      let tempArray = openCards.concat([card])
     setOpenCards(tempArray)
    }

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
