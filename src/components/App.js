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
  const [designCollapsed, setDesignCollapsed] = useState({
    collapsed: '',
    rotate: '',
  });
  const [fillCollapsed, setFillCollapsed] = useState({
    collapsed: 'collapsed',
    rotate: 'rotate',
  });
  const [shareCollapsed, setShareCollapsed] = useState({
    collapsed: 'collapsed',
    rotate: 'rotate',
  });

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

  const handleCollapsables = (ev) => {
    if (
      ev.currentTarget.id === 'design' &&
      designCollapsed.collapsed === 'collapsed'
    ) {
      setDesignCollapsed({
        collapsed: '',
        rotate: '',
      });
    } else if (
      ev.currentTarget.id === 'design' &&
      designCollapsed.collapsed === ''
    ) {
      setDesignCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    } else {
      setDesignCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    }

    if (
      ev.currentTarget.id === 'fill' &&
      fillCollapsed.collapsed === 'collapsed'
    ) {
      setFillCollapsed({
        collapsed: '',
        rotate: '',
      });
    } else if (
      ev.currentTarget.id === 'fill' &&
      fillCollapsed.collapsed === ''
    ) {
      setFillCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    } else {
      setFillCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    }

    if (
      ev.currentTarget.id === 'share' &&
      shareCollapsed.collapsed === 'collapsed'
    ) {
      setShareCollapsed({
        collapsed: '',
        rotate: '',
      });
    } else if (
      ev.currentTarget.id === 'share' &&
      shareCollapsed.collapsed === ''
    ) {
      setShareCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    } else {
      setShareCollapsed({
        collapsed: 'collapsed',
        rotate: 'rotate',
      });
    }
  };


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
              designCollapsed={designCollapsed}
              fillCollapsed={fillCollapsed}
              shareCollapsed={shareCollapsed}
              handleCollapsables={handleCollapsables}
            />
          }
        />
      </Routes>

      <Footer />
      <script src="./assets/js/main.js"></script>
    </div>
  );
}

export default App;
