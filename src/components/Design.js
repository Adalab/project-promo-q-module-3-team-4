import "../styles/layout/Design.scss";
const Design = (props) => {
  return (
    <fieldset>
      <section className="section-form " onClick={props.handleCollapsables}>
        <h2 className="section-form-title">
          <i className="fa-solid fa-object-ungroup"></i>diseña
        </h2>
        <i className="fa-solid fa-angle-up rotate "></i>
      </section>

      <section className={`design-colors `}>
        {/* Se ha quitado la clase collapsed */}
        <h3 className="colors-title">colores</h3>
        <div className="select-colors ">
          <label htmlFor="color-box1" className="color-box-label">
            <input
              type="radio"
              name="palette"
              id="color-box1"
              className="color-box-input "
              value="1"
              onChange={props.handleInput}
              checked={props.dataCard.palette === "1"}
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
              className="color-box-input "
              value="2"
              onChange={props.handleInput}
              checked={props.dataCard.palette === "2"}
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
              className="color-box-input "
              value="3"
              onChange={props.handleInput}
              checked={props.dataCard.palette === "3"}
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
              className="color-box-input "
              value="4"
              onChange={props.handleInput}
              checked={props.dataCard.palette === "4"}
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
              className="color-box-input"
              value="5"
              onChange={props.handleInput}
              checked={props.dataCard.palette === "5"}
            />
            <div className="color-div thirteen"></div>
            <div className="color-div fourteen"></div>
            <div className="color-div fifteen"></div>
          </label>
        </div>
      </section>
    </fieldset>
  );
};

export default Design;
