import { useEffect } from "react";
import { useState } from "react";
import "./Card.css";

export function Card({cartas, card, setCartas}) {
const backCard = '../src/assets/yugioh.png'
// let array = []

function flipCard(param){
  let current = cartas.find(i => i.id === card.id)
  current.visible = param
//   let all = current.img
//   array.push(all)
//   for(let i = 0; i < all.length; i++){
//   if(array[i] === cartas.img){
//     console.log("denis luccas lula flamengo")
//   }
//   else{
  
//     // setTimeout(() => {
//     //   flipCard(false)
//     // }, 2000);
//     console.log("sasukenaruto")
//   }
// }  
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
