import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Cards/Card";

export function App() {
  const [cartas, setCartas] = useState([]);

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
  ];

  useEffect(() => {
    let copyCartas = imagens.concat(imagens.map(i => {
      let newObj = {...i}
      newObj.id = 'copy_' + i.id 
      return newObj
    }));
    
    setCartas(copyCartas);
  }, []);

  useEffect(() => { 


  

  },[cartas])
  
  return(
    <div>
      {cartas && 
      cartas.map((item, value) => {
        return <Card key={item.id} value={value.value} card={item} setCartas={setCartas} cartas={cartas} />
      })
    }
    </div>
  )
  

}
