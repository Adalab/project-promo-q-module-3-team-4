import '../styles/App.scss';
import { useState, useEffect } from 'react';
import ls from '../services/localStorage';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import logoGif from '../images/logo.gif';

import Card from './Card';
import Landing from './Landing';
import Footer from './Footer';

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
  const resetDataCard = () => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: 'images/default.png',
    });
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header className="header" logo={logoGif} cImg="header__logo" />

              <Landing />
            </>
          }
        />

        <Route
          path="/card"
          element={
            <Card
              updateDataCard={updateDataCard}
              dataCard={dataCard}
              updatePreview={updatePreview}
              preview={preview}
              resetDataCard={resetDataCard}
              className="header-app"
              cImg="header-app__logo"
            />
          }
        />
      </Routes>

      <Footer />
      {/* <script src="./assets/js/main.js"></script> */}
    </div>
  );
}

export default App;
