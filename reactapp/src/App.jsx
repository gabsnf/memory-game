import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Cards/Card";

export function App(card, ) {
  const [cartas, setCartas] = useState([]);

  const imagens = [
    {
      id: 1,
      img: "/src/assets/frotaCard.jpeg",
      visible:false
    },
    {
      id: 2,
      img: "/src/assets/paras.jpeg",
      visible:false
    },
  ];

  useEffect(() => {
    let copyCartas = imagens.concat(imagens.map(i => {
      let newObj = {...i}
      newObj.id = 'copy_' + i.id 
      return newObj
    }));
    setCartas(copyCartas);
  }, []);

  useEffect(() =>{

    if(cartas === true){
    console.log("denis")
    if(cartas.id === imagens){
      console.log("inutilismo") 
        current.visible = false
    }

}

  },[cartas])
  
  return(
    <div>
      {cartas && 
      cartas.map((item) => {
        return <Card key={item.id} card={item} setCartas={setCartas} cartas={cartas}/>
      })
    }
    </div>
  )
  

}
