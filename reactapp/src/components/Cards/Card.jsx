import { useEffect } from "react";
import { useState } from "react";
import "./Card.css";
import { App } from '../../App'

export function Card({cartas, card, setCartas}) {
  const backCard = '../src/assets/yugioh.png'
  const [compare, setCompare] = useState([])


function flipCard(param){
  let current = cartas.find(i => i.id === card.id)
  let currentVal = cartas.find(value => value.value === card.value)
  current.visible = param





  setCartas([...cartas])


}

useEffect(() =>{
 
console.log(compare);




  
},[compare])


return(
  <div className="container" onClick={() => {
    console.log(" LOG DOS CARDS ");
    console.log(card);
    flipCard(!card.visible)
    // let tempArray = compare.concat([card])
    setCompare((oldstate) => oldstate.concat([card]))
    // console.log(tempArray)
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
