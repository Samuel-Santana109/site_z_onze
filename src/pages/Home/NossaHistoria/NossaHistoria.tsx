import "./NossaHistoria.scss"

import Img from '../../../assets/fotoMissionariadoEditadaDois.jpg'

//Bootstrap 
import Image from 'react-bootstrap/Image';

export function NossaHistoria() {
    return (
          <>
            <div className="sectionR" id="NossaHistoria">
          
                  <div className="DivtextR" >
                    
                    <span className="spanR">
                     ZeroUM Uma equipe qu esta impactando vidas impactando vidas, reescrevendo histórias e decidindo destinos. Isso é ZeroUM. Adquira já o seu ingresso e não perca a chance de ouvir palavras transformadoras, de viver dias inesquecíveis e de decidir de uma vez por todas O SEU DESTINO.
                    </span>
                  </div>

                    <Image
                     className="imgR"
                     alt="Primeira imagem"
                     src={Img}
                      rounded
                      />
            </div>
         </>
    )
}
