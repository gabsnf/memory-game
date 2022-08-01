import { useState } from "react";
import "./Card.css";

 
// import CardYugioh from "../../assets/yugioh.png";
// import Frota from "../../assets/frotaCard.jpeg";
// import Paras from "../../assets/paras.jpeg";

// const imagens = [CardYugioh, Frota, Paras];

export function Card({img}) {
const cartas = []
const backCard = '../src/assets/yugioh.png'
const [visibleImg, setVisibleImg] = useState(false)
// let now = 0

function flipCard(){
  setVisibleImg(!visibleImg)
  setTimeout(() => {
    cartas.push(visibleImg)
    setVisibleImg(false)
  }, 5000)
}

function count(){
for(let i = 0; i < 2; i++){
  flipCard
}
}

return(
  <div className="container" onClick={() => count()}>
    {
      !visibleImg ? (
        <img src={backCard} />
      ): (
        <img src={img} />
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