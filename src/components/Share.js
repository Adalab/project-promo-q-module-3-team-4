import '../styles/layout/Share.scss';
const Share = (props) => {
  return (
    <fieldset>
      <section
        id="share"
        className="section-form js_header_share"
        onClick={props.handleCollapsables}
      >
        <h2 className="section-form-title">
          <i className="fa-solid fa-share-nodes"></i>comparte
        </h2>
        <i
          className={`fa-solid fa-angle-up js_angle_share ${props.shareCollapsed.rotate}`}
        ></i>
      </section>
      <div
        className={`create_button js_content_share ${props.shareCollapsed.collapsed}`}
      >
        {/* Se ha quitado la clase collapsed */}
        <button
          className="submit_button js_submit_button"
          type="submit"
          onClick={props.handleCreateCard}
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
  );
};

export default Share;
