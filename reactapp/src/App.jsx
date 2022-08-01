import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Cards/Cards";

export function App() {
  const [img, setImg] = useState([]);

  const imagens = [
    {
      id: 1,
      img: "/src/assets/frotaCard.jpeg",
    },
    {
      id: 2,
      img: "/src/assets/paras.jpeg",
    },
  ];

  useEffect(() => {
    let image = imagens.concat(imagens);
    setImg(image);
  }, []);

  return(
    <div>
      {img && 
      img.map((item) => {
        return <Card key={item.id} img={item.img} />
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
