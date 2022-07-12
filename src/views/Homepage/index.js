import Header from "../../components/header";
import * as HP from "./styles";
import imgCracha from "../../assets/img/transparent_no_shadow.png";

function HomePage() {
  var nome = "Kauan";

  return (
    <div>
      <Header />
      <HP.Container>
        <HP.Left>
          <h1>Portal do Colaborador</h1>
          <h2>
            Bem vindo, <span>{nome}</span>!
          </h2>

        </HP.Left>
        <HP.Right>
          <img src={imgCracha}></img>
        </HP.Right>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e00203"
            fill-opacity="1"
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,218.7C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </HP.Container>
    </div>
  );
}

export default HomePage;
