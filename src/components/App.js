import '../styles/App.scss';
import logo from '../images/logo-footer.jpg';
import { useState, useEffect } from 'react';

import ls from '../services/localStorage';
import Header from './Header';
import CardPreview from './CardPreview';

import Form from './Form';

function App() {
  const [preview, setPreview] = useState({});

  // const [validationText, setValidationText] = useState('');

  // const validateResponse = () => {
  //   if (preview.success) {
  //     setValidationText('La tarjeta ha sido creada');
  //   } else {
  //     setValidationText
  //   }
  // }

  // const [classCollapsed, setClassCollapsed] = useState('collapsed');

  // const [dataCard, setDataCard] = useState(ls.get('dataLS', {}));
  // // const [dataCard, setDataCard] = useState({
  // //   palette: "1",
  // //   name: "",
  // //   job: "",
  // //   phone: "",
  // //   email: "",
  // //   linkedin: "",
  // //   github: "",
  // //   photo: "../images/default.png"
  // // });

  const [dataCard, setDataCard] = useState(
    ls.get('dataLS', {
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: 'images/default.png',
    })
  );
  const updateDataCard = (inputName, inputValue) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };

  const updatePreview = (apiResponse) => {
    setPreview(apiResponse);
  };

  useEffect(() => {
    ls.set('dataLS', dataCard);
  }, [dataCard]);

  // const handleClickCollapsed = (ev) => {
  //   // if (classCollapsed === 'collapsed') {
  //   //   setClassCollapsed('');
  //   // } else {
  //   //   setClassCollapsed('collapsed');
  //   // }
  //   classCollapsed === 'collapsed'
  //     ? setClassCollapsed('')
  //     : setClassCollapsed('collapsed');
  // };

  // useEffect(() => {
  //   sendToApi(dataCard).then((response) => {
  //     setPreview(response);
  //   });
  // }, [dataCard]);

  return (
    <div>
      <Header logo={logo} />
      <main className="main-app">
        <CardPreview setDataCard={setDataCard} dataCard={dataCard} />
        <Form
          updateDataCard={updateDataCard}
          updatePreview={updatePreview}
          dataCard={dataCard}
          preview={preview}
        />
      </main>
      {/* <footer className="footer">
        <div className="footer__text">
          <p>
            Monday haters <small>©2022</small>
          </p>
        </div>
        <div className="footer__logo">
          <a href="./index.html#">
            {' '}
            <img
              className="footer__logo--img"
              src={logo}
              alt="logo"
              title="logo"
            />
          </a>
        </div>
      </footer> */}
      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
