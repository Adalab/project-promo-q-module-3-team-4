import '../styles/App.scss';
import logo from '../images/logo-footer.jpg';
import { useState, useEffect } from 'react';
import sendToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import CardPreview from './CardPreview';
import Design from './Design';

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


  const [dataCard, setDataCard] = useState(ls.get('dataLS', {
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "images/default.png"
  }));


  const handleInput = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    setDataCard({ ...dataCard, [inputName]: inputValue });

    if (inputName === 'photo') {
      const file = ev.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        const content = event.target.result;
        setDataCard({ ...dataCard, [inputName]: content });
      };
    }

  };

  useEffect(() => {
    ls.set('dataLS', dataCard);
  }, [dataCard]);


  const handleCreateCard = (ev) => {
    ev.preventDefault();
    sendToApi(dataCard).then((response) => {
      setPreview(response);
    });

  };



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
        <form action="" className="form-container js_all_inputs">
          <Design handleInput={handleInput} dataCard={dataCard} />
          <fieldset>
            <section
              className="section-form js_header_data"
            // onClick={handleClickCollapsed}
            >
              <h2 className="section-form-title">
                <i className="fa-solid fa-keyboard"></i>rellena
              </h2>
              <i className="fa-solid fa-angle-up rotate js_angle_data"></i>
            </section>
            <section className="data-input-section js_content_data">
              {/* Se ha quitado la clase collapsed */}
              <label htmlFor="name" className="data-label">
                Nombre completo
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="data-input js_name_input"
                  placeholder="Ej: Sally Jill"
                  onChange={handleInput}
                  value={dataCard.name}
                />
              </label>
              <label htmlFor="job" className="data-label">
                Puesto
                <input
                  type="text"
                  name="job"
                  id="job"
                  className="data-input js_job_input"
                  placeholder="Ej: Front-end unicorn"
                  onChange={handleInput}
                  value={dataCard.job}
                />
              </label>
              <label htmlFor="profile-pic" className="data-label">
                Imagen de perfil
                <div className="image-input-div">
                  <label htmlFor="profile-pic" className="image-input-label">
                    Añadir imagen
                    <input
                      type="file"
                      id="profile-pic"
                      className="image-input js__profile-upload-btn"
                      name="photo"
                      onChange={handleInput}
                    // value={dataCard.photo}
                    />
                  </label>
                  <div
                    className="image_preview js__profile-image"
                    style={{ backgroundImage: `url(${dataCard.photo})` }}
                  ></div>
                </div>
              </label>

              <label htmlFor="email" className="data-label">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="data-input js_email_input"
                  placeholder="Ej: Sally-hill@gmail.com"
                  onChange={handleInput}
                  value={dataCard.email}
                />
              </label>
              <label htmlFor="phone" className="data-label">
                Teléfono
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="data-input js_phone_input"
                  placeholder="Ej: 555-55-55-55"
                  pattern="[0-9]{9}"
                  onChange={handleInput}
                  value={dataCard.phone}
                />
              </label>
              <label htmlFor="linkedin" className="data-label">
                Linkedin
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  className="data-input js_linkedin_input"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                  onChange={handleInput}
                  value={dataCard.linkedin}
                />
              </label>
              <label htmlFor="github" className="data-label ">
                Github
                <input
                  type="text"
                  name="github"
                  id="github"
                  className="data-input js_github_input"
                  placeholder="Ej:@sally-hill"
                  onChange={handleInput}
                  value={dataCard.github}
                />
              </label>
            </section>
          </fieldset>
          <fieldset>
            <section className="section-form js_header_share">
              <h2 className="section-form-title">
                <i className="fa-solid fa-share-nodes"></i>comparte
              </h2>
              <i className="fa-solid fa-angle-up rotate js_angle_share"></i>
            </section>
            <div className="create_button js_content_share">
              {/* Se ha quitado la clase collapsed */}
              <button
                className="submit_button js_submit_button"
                type="submit"
                onClick={handleCreateCard}
              >
                <i className="fa fa-address-card" aria-hidden="true"></i> crear
                tarjeta
              </button>
              <section className="font_success">
                <p className="card_create js_message collapsed"></p>
                <a
                  className="card_link js_url"
                  // se ha quitado la clase collapsed
                  href={preview.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {preview.url}
                </a>

                <a
                  className="button_twiter js_button_twitter"
                  // Se ha quitado la clase collapsed
                  href="true"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter"></i>
                  Compartir en twitter
                </a>
              </section>
            </div>
          </fieldset>
        </form>
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
