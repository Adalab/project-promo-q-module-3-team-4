<<<<<<< HEAD
import Header from "./Header";
import CardPreview from "./CardPreview";
import logo from "../images/logo.jpg";
import Form from "./Form";
=======
import Header from './Header';
import CardPreview from './CardPreview';
import logo from '../images/logo.jpg';
import Form from './Form';
>>>>>>> f82eccb61f6deec038e4fd83fe7e912e1f450329

const Card = (props) => {
  return (
    <>
<<<<<<< HEAD
      <Header logo={logo} className={props.className} />
=======
      <Header logo={logo} className={props.className} cImg={props.cImg} />
>>>>>>> f82eccb61f6deec038e4fd83fe7e912e1f450329
      <main className="main-app">
        <CardPreview
          setDataCard={props.updateDataCard}
          dataCard={props.dataCard}
<<<<<<< HEAD
          resetDataCard={props.resetDataCard}
=======
>>>>>>> f82eccb61f6deec038e4fd83fe7e912e1f450329
        />
        <Form
          updateDataCard={props.updateDataCard}
          updatePreview={props.updatePreview}
          dataCard={props.dataCard}
          preview={props.preview}
        />
      </main>
    </>
  );
};

export default Card;
