//import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './CarrosselSemBotao.css';

interface Item {
  titulo: string;
  src: string;
  explicativo: string;
  href: string;
}

interface Propriedades {
  NomeLinguagem: string;
  props: {
    [key: string]: string;
  };
}

export function CarrosselSemBotao({ NomeLinguagem, props }: Propriedades) {
  const items: Item[] = [];

  for (let i = 1; i <= 6; i++) {
    const item: Item = {
      titulo: props[`titulo${i}`],
      src: props[`src${i}`],
      explicativo: props[`explicativo${i}`],
      href: props[`href${i}`],
    };
    items.push(item);
  }

  return (
    <>
      <h1 className="NomeLinguagem">{NomeLinguagem}</h1>
      <div className="carousel_container">
        <div className="carousel">
          {items.map((item, index) => (
            <div key={index} className="carousel_item">
              <h4>{item.titulo}</h4>
              <p>{item.explicativo}</p>
              <a href={item.href}>
                <img src={item.src} className="img" alt="Imagem do Carrossel" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



