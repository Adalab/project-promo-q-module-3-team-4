import Header from './Header';
import CardPreview from './CardPreview';
import logo from '../images/logo.jpg';
import Form from './Form';

const Card = (props) => {
  return (
    <>
      <Header logo={logo} className={props.className} cImg={props.cImg} />
      <main className="main-app">
        <CardPreview
          setDataCard={props.updateDataCard}
          dataCard={props.dataCard}
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
