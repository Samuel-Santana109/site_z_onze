
//import "./NossasCelulas.scss"

//import Img from '../../../assets/fotoMissionariado.jpg'
import Img from '../../../assets/imagem.jpg'

//Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Valores {
    imagem: string,
    titulo: string,
    text: string
}

export function NossasCelulas() {
    return (
      <div>
            <Card style={{ width: '18rem', margin: '2rem' }}>
              <Card.Img variant="top" src={Img} />
              <Card.Body>
                <Card.Title className="text-white">Samuel Santana da Silva</Card.Title>
                <Card.Text>
                  <p>Celula: Quinta - Feira</p> 
                  <p>Horario: 20h</p> 
                  <p>Formas de Contato: 61 9 91076831</p>
                </Card.Text>
                <Button variant="primary">Clique aqui para entrar em contato!</Button>
              </Card.Body>
            </Card>
            
        </div>
    )
}
