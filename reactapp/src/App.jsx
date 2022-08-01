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

  return(
    <div>
      {cartas && 
      cartas.map((item) => {
        return <Card key={item.id} card={item} setCartas={setCartas} cartas={cartas}/>
      })
      }
    </div>
  )

  // const [visible, setVisible] = useState(false);

  // function handleVisible() {

  //   setVisible(current => !current)

  //   setVisible(imagens[i])

  //   if(imagens[0]){
  //     imagens[0] = imagens[1]
  //   }

  // }

  return (
    <div className="memory">
      <Card />
    </div>
  );
}
