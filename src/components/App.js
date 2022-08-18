import '../styles/App.scss';
import logo from '../images/logo-footer.jpg';
import { useState} from 'react';
import sendToApi from '../services2/api';
import ls from '../services/localStorage';

function App() {
  const [preview, setPreview] = useState('');
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
      photo: "../images/default.png"
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
    ls.set('dataLS', dataCard);
  };

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    sendToApi(dataCard).then((response) => {
      setPreview(response);
    });
    ls.set('dataLS', dataCard);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '../images/default.png',
    });
    ls.set('dataLS', {});
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
      <header className="header-app">
        <a href="./index.html#" title="inicio">
          <img
            className="header-app__logo"
            src={logo}
            alt="logo"
            title="logo"
          />
        </a>
      </header>
      <main className="main-app">
        <section className="section-preview">
          <div className="container-preview-button js_reset_button">
            <button className="preview-button " onClick={handleReset}>
              <i className="fa-solid fa-trash-can icon-button"></i>
              <span>reset</span>
            </button>
          </div>
          <div className="preview-data js_preview_palette palette-1">
            <div className="preview-container-title js_preview_container">
              <h2 className="preview-name js_preview_name">
                {dataCard.name || 'Nombre y apellidos'}
              </h2>
              <h3 className="preview-job js_preview_job">
                {dataCard.job || 'Front-end developer'}
              </h3>
            </div>
            <div
              className="preview-img js__profile-preview"
              style={{ backgroundImage: `url(${dataCard.photo})` }}
            >
              {/* <img src={imageUrl} alt="" /> */}
            </div>
            <div className="preview-icon-contact">
              <a
                href={`tel:${dataCard.phone}`}
                rel="noreferrer"
                target="_blank"
                className="link-preview-icon js_preview_phone"
              >
                <i className="fa-solid fa-mobile-screen-button preview-icon mobile-preview-icon icons-preview"></i>
              </a>
              <a
                href={`mailto:${dataCard.email}`}
                rel="noreferrer"
                target="_blank"
                className="link-preview-icon js_preview_email"
              >
                <i className="fa-regular fa-envelope preview-icon icons-preview"></i>
              </a>
              <a
                href={`https://www.linkedin.com/in/${dataCard.linkedin}`}
                rel="noreferrer"
                target="_blank"
                className="link-preview-icon js_preview_linkedin"
              >
                <i className="fa-brands fa-linkedin-in preview-icon  icons-preview"></i>
              </a>
              <a
                href={`https://github.com/${dataCard.github}`}
                rel="noreferrer"
                target="_blank"
                className="link-preview-icon js_preview_github"
              >
                <i className="fa-brands fa-github-alt preview-icon icons-preview"></i>
              </a>
            </div>
          </div>
        </section>
        <form action="" className="form-container js_all_inputs">
          <fieldset>
            <section
              className="section-form js_header_design"
            // onClick={handleClickCollapsed}
            >
              <h2 className="section-form-title">
                <i className="fa-solid fa-object-ungroup"></i>diseña
              </h2>
              <i className="fa-solid fa-angle-up rotate js_angle_design"></i>
            </section>
            <section className={`design-colors js_content_design`}>
              {/* Se ha quitado la clase collapsed */}
              <h3 className="colors-title">colores</h3>
              <div className="select-colors js_palette">
                <label htmlFor="color-box1" className="color-box-label">
                  <input
                    type="radio"
                    name="palette"
                    id="color-box1"
                    className="color-box-input js_palette1"
                    value="1"
                    onChange={handleInput}
                    checked={dataCard.palette === '1'}
                  />
                  <div className="color-div one"></div>
                  <div className="color-div two"></div>
                  <div className="color-div three"></div>
                </label>
                <label htmlFor="color-box2" className="color-box-label">
                  <input
                    type="radio"
                    name="palette"
                    id="color-box2"
                    className="color-box-input js_palette2"
                    value="2"
                    onChange={handleInput}
                    checked={dataCard.palette === '2'}
                  />
                  <div className="color-div four"></div>
                  <div className="color-div five"></div>
                  <div className="color-div six"></div>
                </label>
                <label htmlFor="color-box3" className="color-box-label">
                  <input
                    type="radio"
                    name="palette"
                    id="color-box3"
                    className="color-box-input js_palette3"
                    value="3"
                    onChange={handleInput}
                    checked={dataCard.palette === '3'}
                  />
                  <div className="color-div seven"></div>
                  <div className="color-div eight"></div>
                  <div className="color-div nine"></div>
                </label>
                <label htmlFor="color-box4" className="color-box-label">
                  <input
                    type="radio"
                    name="palette"
                    id="color-box4"
                    className="color-box-input js_palette4"
                    value="4"
                    onChange={handleInput}
                    checked={dataCard.palette === '4'}
                  />
                  <div className="color-div ten"></div>
                  <div className="color-div eleven"></div>
                  <div className="color-div twelve"></div>
                </label>
                <label htmlFor="color-box5" className="color-box-label">
                  <input
                    type="radio"
                    name="palette"
                    id="color-box5"
                    className="color-box-input js_palette5"
                    value="5"
                    onChange={handleInput}
                    checked={dataCard.palette === '5'}
                  />
                  <div className="color-div thirteen"></div>
                  <div className="color-div fourteen"></div>
                  <div className="color-div fifteen"></div>
                </label>
              </div>
            </section>
          </fieldset>
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
                  href={preview}
                  rel="noreferrer"
                  target="_blank"
                >
                  {preview}
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
