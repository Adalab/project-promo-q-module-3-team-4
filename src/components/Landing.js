import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="main">
      <h1 className="main__title">Crea tu tarjeta de visita</h1>
      <p className="main__text">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>
      <section className="main__icons">
        <div>
          <i className="fa-regular fa-object-ungroup" title="Diseña"></i>
          <p className="main__icons--text">Diseña</p>
        </div>
        <div>
          <i className="fa-solid fa-keyboard" title="Rellena"></i>
          <p className="main__icons--text">Rellena</p>
        </div>
        <div>
          <i className="fa-solid fa-share-nodes" title="Comparte"></i>
          <p className="main__icons--text">Comparte</p>
        </div>
      </section>
      <section className="main__link">
        <Link className="main__link--link" to="/card">
          comenzar
        </Link>
      </section>
    </main>
  );
};

export default Landing;
