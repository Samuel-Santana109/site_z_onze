import  './HorariosCultosArena.scss'
import Img from '../../../assets/zeroUmEditada.jpg'

//Bootstrap 
import Image from 'react-bootstrap/Image';

export function HorariosCultosArena() {
    return (
      
            <div className="sectionH" id='Horarios'>
           
                  <div className="DivtextH" >
                    <span className="spanH">
                     Noossos cultos sao em horarios xxxxxxxxxxxxxx
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