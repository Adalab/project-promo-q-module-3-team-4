import GetAvatar from './GetAvatar';

const Fill = (props) => {
  return (
    <fieldset>
      <section
        id="fill"
        className="section-form js_header_data"
        onClick={props.handleCollapsables}
      >
        <h2 className="section-form-title">
          <i className="fa-solid fa-keyboard"></i>rellena
        </h2>
        <i
          className={`fa-solid fa-angle-up js_angle_data ${props.fillCollapsed.rotate}`}
        ></i>
      </section>
      <section
        className={`data-input-section js_content_data ${props.fillCollapsed.collapsed}`}
      >
        {/* Se ha quitado la clase collapsed */}
        <label htmlFor="name" className="data-label">
          Nombre completo
          <input
            type="text"
            name="name"
            id="name"
            className="data-input js_name_input"
            placeholder="Ej: Sally Jill"
            onChange={props.handleInput}
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
            onChange={props.handleInput}
            value={props.dataCard.job}
          />
        </label>
        <label htmlFor="profile-pic" className="data-label">
          Imagen de perfil
          <div className="image-input-div">
            <GetAvatar
              avatar={props.dataCard.photo}
              updateDataCard={props.updateDataCard}
            />
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
            onChange={props.handleInput}
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
            onChange={props.handleInput}
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
            onChange={props.handleInput}
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
            onChange={props.handleInput}
            value={props.dataCard.github}
          />
        </label>
      </section>
    </fieldset>
  );
};

export default Fill;
