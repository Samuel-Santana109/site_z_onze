
//import "./NossasCelulas.scss"

//import Img from '../../../assets/fotoMissionariado.jpg'

//Bootstrap 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import Image from 'react-bootstrap/Image';

export function NossasCelulas() {
    return (
      <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
    )
}
