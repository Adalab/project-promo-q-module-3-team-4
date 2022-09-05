import GetAvatar from "./GetAvatar";
import "../styles/layout/Fill.scss";


const Fill = (props) => {
  return (
    <fieldset>
      <section
        className="section-form "
        // onClick={handleClickCollapsed}
      >
        <h2 className="section-form-title">
          <i className="fa-solid fa-keyboard"></i>rellena
        </h2>
        <i className="fa-solid fa-angle-up rotate "></i>
      </section>
      <section className="data-input-section ">
        {/* Se ha quitado la clase collapsed */}
        <label htmlFor="name" className="data-label">
          Nombre completo
          <input
            type="text"
            name="name"
            id="name"
            className="data-input "
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
            className="data-input "
            placeholder="Ej: Front-end unicorn"
            onChange={props.handleInput}
            value={props.dataCard.job}
          />
        </label>
        <label className="data-label">
          Imagen de perfil
          <div className="image-input-div">


            <GetAvatar
              avatar={props.dataCard.photo}
              updateDataCard={props.updateDataCard}
            />


            <div
              className="image_preview "
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
            className="data-input "
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
            className="data-input "
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
            className="data-input "
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
            className="data-input "
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
