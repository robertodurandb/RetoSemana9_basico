import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";
import Main from "../Componentes/MainContent/Main";
import Sidenav from "../Componentes/Sidenav/Sidenav";
import "./Home.css";

export default function Home() {
  return (
    <div className="document">
      <div className="head">
        <Header />
      </div>

      <div className="Mainp">
        <div className="sidenav-izq">
          <Sidenav />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="sidenav-der">
          <Sidenav />
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}
