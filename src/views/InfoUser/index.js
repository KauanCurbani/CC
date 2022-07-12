

/* SCALE (0.5) */
/* SET INTERVAL 500MS */
/* OPACITY 0 */
/* SET INTERVAL 1000MS */
/* DISPLAY NONE */

import Header from "../../components/header";
import * as IU from "./styles";
import imgBordado from "../../assets/img/SegalasMock.png";
import { BiUserCircle } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { FaRegAddressCard } from "react-icons/fa";
import ReactDOM from "react-dom";
import { useState } from "react";

function InfoUser() {
  var nome = "Felipe Baer";
  var id = "5256728";

  const [isShow, setIsShow] = useState(true);

  const handleClick = (event) => {
    setIsShow((current) => !current);
  };

  return (
    <div>
      <Header />
      <IU.Container>
        <div className="textArea">
          <h1>Portal do Colaborador</h1>
        </div>
        <div className="containerCard">
          <div className="textCard">
            <h1 id="nick">{nome}</h1>
            <span>N° {id}</span>
          </div>
          <div className="infoCard">
            <div className="card1 card" onClick={handleClick} style={{display: isShow ? 'flex' : 'none'}}>
              <BiUserCircle id="icon" />
              <span id="span1">Dados pessoais</span>
            </div>
            <div className="card2 card">
              <ImNewspaper id="icon" />
              <span id="span1">Folhas de pagamento</span>
            </div>
            <div className="card3 card">
              <FaRegAddressCard id="icon" />
              <span id="span1">Cartão ponto</span>
            </div>
          </div>
        </div>
      </IU.Container>
    </div>
  );
}

export default InfoUser;
