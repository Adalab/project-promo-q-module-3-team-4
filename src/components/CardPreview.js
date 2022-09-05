import "../styles/layout/Preview.scss";

const CardPreview = (props) => {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.resetDataCard();
  };

  return (
    <section className="section-preview">
      <div className="container-preview-button ">
        <button className="preview-button " onClick={handleReset}>
          <i className="fa-solid fa-trash-can icon-button"></i>
          <span>reset</span>
        </button>
      </div>
      <div className={`preview-data  palette-${props.dataCard.palette}`}>
        <div className="preview-container-title ">
          <h2 className="preview-name ">
            {props.dataCard.name || "Nombre y apellidos"}
          </h2>
          <h3 className="preview-job ">
            {props.dataCard.job || "Front-end developer"}
          </h3>
        </div>
        <div
          className="preview-img "
          style={{ backgroundImage: `url(${props.dataCard.photo})` }}
        >
        </div>
        <div className="preview-icon-contact">
          <a
            href={`tel:${props.dataCard.phone}`}
            rel="noreferrer"
            target="_blank"
            className="link-preview-icon "
          >
            <i className="fa-solid fa-mobile-screen-button preview-icon mobile-preview-icon icons-preview"></i>
          </a>
          <a
            href={`mailto:${props.dataCard.email}`}
            rel="noreferrer"
            target="_blank"
            className="link-preview-icon "
          >
            <i className="fa-regular fa-envelope preview-icon icons-preview"></i>
          </a>
          <a
            href={`https://www.linkedin.com/in/${props.dataCard.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="link-preview-icon "
          >
            <i className="fa-brands fa-linkedin-in preview-icon  icons-preview"></i>
          </a>
          <a
            href={`https://github.com/${props.dataCard.github}`}
            rel="noreferrer"
            target="_blank"
            className="link-preview-icon "
          >
            <i className="fa-brands fa-github-alt preview-icon icons-preview"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
