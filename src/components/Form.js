import Design from './Design';
import sendToApi from '../services/api';
const Form = (props) => {
  const handleCreateCard = (ev) => {
    ev.preventDefault();
    sendToApi(props.dataCard).then((response) => {
      props.updatePreview(response);
    });
  };
  const handleInput = (ev) => {
    const inputName = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    props.updateDataCard(inputName, inputValue);

    if (inputName === 'photo') {
      const file = ev.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        const content = event.target.result;
        props.updateDataCard(inputName, content);
      };
    }
  };
  return (
    <form action="" className="form-container js_all_inputs">
      <Design handleInput={handleInput} dataCard={props.dataCard} />
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
              value={props.dataCard.name}
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
              value={props.dataCard.job}
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
                style={{ backgroundImage: `url(${props.dataCard.photo})` }}
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
              value={props.dataCard.email}
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
              value={props.dataCard.phone}
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
              value={props.dataCard.linkedin}
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
              value={props.dataCard.github}
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
              href={props.preview.url}
              rel="noreferrer"
              target="_blank"
            >
              {props.preview.url}
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
  );
};
export default Form;
