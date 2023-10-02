//import React from 'react'
import  './LideresDaEquipe.scss'
import Img from '../../../assets/fotoMissionariadoEditadaDois.jpg'

//Bootstrap 
import Image from 'react-bootstrap/Image';

export function LideresDaEquipe() {
    return (
      
            <div className="section" id='LideresDaEquipe'>
           
                  <div className="Divtext" >
                    
                    <span>
                    Nossos missionarios sao xxxxxxxxxxx
                    gabriel xxxxxxxxxx
                    karen xxxxxxxxxxxx

                    </span>
                  </div>

                    <Image
                     className="img"
                     alt="Primeira imagem"
                     src={Img}
                      rounded
                      />
            </div>
    )
}
