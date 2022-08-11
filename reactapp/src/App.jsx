import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Cards/Card";
import './App.css'

export function App() {
  const [cartas, setCartas] = useState([]);
  const [openCards, setOpenCards] = useState([])

  const imagens = [
    {
      id: 1,
      img: "/src/assets/frotaCard.jpeg",
      visible: false,
      value: 1
    },
    {
      id:2,
      img: "/src/assets/lula.jpeg",
      visible: false,
      value: 2
    },
    {
      id: 3,
      img: "/src/assets/paras.jpeg",
      visible: false,
      value: 3
    },
    {
      id: 4,
      img: "/src/assets/biden.png",
      visible: false,
      value: 4
    },
    {
      id: 5,
      img: "/src/assets/sakuratree.png",
      visible: false,
      value: 5
    }

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
      console.log(openCards)
     if(openCards[0].value === openCards[1].value){
      console.log("ta igual")
      console.log(cartas);
     const tempArray = cartas.filter((i) => {
       return i.value !== openCards[0].value && i.visible == false
      })
      console.log(tempArray);
      setCartas(tempArray)
      setOpenCards([])
    }
    else{

      setTimeout(() => {
        for(let i = 0; i < openCards.length; i++){
          if(openCards[i].visible){
            openCards[i].visible = false
            console.log(openCards[i])
            
          }
        }
     setOpenCards([])
     setCartas(cartas)
      }, 2000);
    }
    
  
}},[openCards])

useEffect(() => {

},[])

  
  return(

    <div className="container">
      {cartas && 
      cartas.map((item) => {
        return <Card key={item.id} card={item} setCartas={setCartas} cartas={cartas} setOpenCards={setOpenCards} openCards={openCards}/>
      })
    }
    </div>

  )
  

}
