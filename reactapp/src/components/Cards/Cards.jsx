import { useState } from 'react'
import './Card.css'

import CardYugioh from '../../assets/yugioh.png'
import Frota from '../../assets/frotaCard.jpeg'
import Paras from '../../assets/paras.jpeg'


export function Card() {

   function handleFlipCard(){
    
   }

  return (
    
    <main>
      <div className='container'>
    <div id='card'>
      <div id='cardInner'>
      <div id='frontCard'>
      <img src={CardYugioh} alt="" />
      </div>
      <div id='backCard'>
        <img src={Frota} alt="" />
        </div>

      </div>
    </div>

    <div id='card2'>

      <div id='cardInner2'>
        <div id='frontCard2'>
      <img src={CardYugioh} alt="" />

        </div>
        <div id='backCard2'>
        <img src={Paras} alt="" />

        </div>

      </div>


    </div>
    </div>
    </main>
  )
}


