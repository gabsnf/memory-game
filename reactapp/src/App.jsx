import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Cards/Card";

export function App() {
  const [cartas, setCartas] = useState([]);
  const [openCards, setOpenCards] = useState([])

  const imagens = [
    {
      id: 1,
      img: "/src/assets/frotaCard.jpeg",
      visible: false,
      value: 2
    },
    {
      id: 2,
      img: "/src/assets/paras.jpeg",
      visible: false,
      value: 3
    },
  ]


  useEffect(() => {
    let copyCartas = imagens.concat(imagens.map(i => {
      let newObj = {...i}
      newObj.id = 'copy_' + i.id 
      return newObj
    }));
    
    setCartas(copyCartas);
  }, []);

  useEffect(() => { 
    if(openCards.length == 2){
      console.log("array tem dois itens")
     if(openCards[0].value === openCards[1].value){
      console.log("ta igual")
      console.log(cartas);
     const tempArray = cartas.filter((i) => {
        i.value !== openCards[0].value && i.visible == false
      })
      console.log(tempArray);
      setCartas(tempArray)
      setOpenCards([])
     }
    }
    
  },[openCards])

  
  return(
    <div>
      {cartas && 
      cartas.map((item) => {
        return <Card key={item.id} card={item} setCartas={setCartas} cartas={cartas} setOpenCards={setOpenCards} openCards={openCards}/>
      })
    }
    </div>
  )
  

}
