
const CardPreview = (props) => {

    const handleReset = (ev) => {
        ev.preventDefault();
        props.setDataCard({
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

    return (
        <section className="section-preview">
            <div className="container-preview-button js_reset_button">
                <button className="preview-button " onClick={handleReset}>
                    <i className="fa-solid fa-trash-can icon-button"></i>
                    <span>reset</span>
                </button>
            </div>
            <div className={`preview-data js_preview_palette palette-${props.dataCard.palette}`}>
                <div className="preview-container-title js_preview_container">
                    <h2 className="preview-name js_preview_name">
                        {props.dataCard.name || 'Nombre y apellidos'}
                    </h2>
                    <h3 className="preview-job js_preview_job">
                        {props.dataCard.job || 'Front-end developer'}
                    </h3>
                </div>
                <div
                    className="preview-img js__profile-preview"
                    style={{ backgroundImage: `url(${props.dataCard.photo})` }}
                >
                    {/* <img src={imageUrl} alt="" /> */}
                </div>
                <div className="preview-icon-contact">
                    <a
                        href={`tel:${props.dataCard.phone}`}
                        rel="noreferrer"
                        target="_blank"
                        className="link-preview-icon js_preview_phone"
                    >
                        <i className="fa-solid fa-mobile-screen-button preview-icon mobile-preview-icon icons-preview"></i>
                    </a>
                    <a
                        href={`mailto:${props.dataCard.email}`}
                        rel="noreferrer"
                        target="_blank"
                        className="link-preview-icon js_preview_email"
                    >
                        <i className="fa-regular fa-envelope preview-icon icons-preview"></i>
                    </a>
                    <a
                        href={`https://www.linkedin.com/in/${props.dataCard.linkedin}`}
                        rel="noreferrer"
                        target="_blank"
                        className="link-preview-icon js_preview_linkedin"
                    >
                        <i className="fa-brands fa-linkedin-in preview-icon  icons-preview"></i>
                    </a>
                    <a
                        href={`https://github.com/${props.dataCard.github}`}
                        rel="noreferrer"
                        target="_blank"
                        className="link-preview-icon js_preview_github"
                    >
                        <i className="fa-brands fa-github-alt preview-icon icons-preview"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CardPreview;