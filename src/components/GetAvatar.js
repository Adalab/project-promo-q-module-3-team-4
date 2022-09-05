import React from "react";
import PropTypes from "prop-types";
import "../styles/GetAvatar.scss";

function GetAvatar(props) {

  const reader = new FileReader();
  const myFileField = React.createRef();
 
  const uploadImage = (ev) => {

    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      reader.addEventListener("load", getImage);
      reader.readAsDataURL(myFile);
    };
  };

  const getImage = () => {
    const image = reader.result;
    props.updateDataCard('photo', image);
  };

  return (
    <div className="image-input-div">
      <label className="image-input-label" >
        Añadir imagen
        <input
          type="file"
          ref={myFileField}
          className="image-input"
          onChange={uploadImage}
          name="photo"
        />
      </label>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateDataCard: PropTypes.func.isRequired,
};

export default GetAvatar;
