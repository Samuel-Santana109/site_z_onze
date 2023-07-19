import  './HorariosCultosArena.scss'
import Img from '../../../assets/zeroUm.jpg'

//Bootstrap 
import Image from 'react-bootstrap/Image';

export function HorariosCultosArena() {
    return (
      
            <div className="sectionH">
           
                  <div className="DivtextH" >
                    <span className="spanH">
                     ZeroUM Uma equipe qu esta impactando vidas impactando vidas, reescrevendo histórias e decidindo destinos. Isso é ZeroUM. Adquira já o seu ingresso e não perca a chance de ouvir palavras transformadoras, de viver dias inesquecíveis e de decidir de uma vez por todas O SEU DESTINO.
                    </span>
                  </div>

                    <Image
                     className="imgH"
                     alt="Primeira imagem"
                     src={Img}
                      rounded
                      />
            </div>
    )
}