import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";
import Main from "../Componentes/MainContent/Main";
import Sidenav from "../Componentes/Sidenav/Sidenav";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="head">
        <Header />
      </div>

      <div className="Mainp">
        <Sidenav />
        <Main />
        <Sidenav />
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}
