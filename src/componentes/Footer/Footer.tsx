
import { FaInstagram  } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';



export function Footer(){
    return(
        <footer className="text-white footer">
            <Container>
                <Row>
            <Col>
              <h5>ZeroUm.11</h5>
              <p>Nos somos uma rquie que trabalhamos em celulas e temos o nosso arena jovem  que é um culto feito para jovens</p>
            </Col>
          <Col class="d-flex">
           
            
            <p>Email: ZeroUmOnze@gmail.com</p>
            <p>Telefone: (61) 9 9107-6831</p>
            
            <a href='https://www.instagram.com/zeroum.onze/' target='blank' className='a'> Instagram <FaInstagram /> </a>   
            
            
          </Col>
        </Row>
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Arenas Jovem</p>
        <p className="text-center">© {new Date().getFullYear()} Celulas</p>
        <p className="text-center">© {new Date().getFullYear()} Revisao de Vidas</p>
            </Container>
        </footer>
    )

}