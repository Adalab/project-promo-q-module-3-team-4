import Design from './Design';
import sendToApi from '../services/api';
import Fill from './Fill';
import Share from './Share';

// import { useState } from 'react';

const Form = (props) => {
  // const [isCollapsed, setIsCollapsed] = useState(true);
  // const [classCollapsed, setClassCollapsed] = useState('');

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

    // if (inputName === "photo") {
    //   const file = ev.currentTarget.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function (event) {
    //     const content = event.target.result;
    //     props.updateDataCard(inputName, content);
    //   };
  };

  // const handleCollapsables = () => {

  // }

  return (
    <form action="" className="form-container js_all_inputs">
      <Design
        handleInput={handleInput}
        dataCard={props.dataCard}
        handleCollapsables={props.handleCollapsables}
        designCollapsed={props.designCollapsed}
      />

      <Fill
        handleInput={handleInput}
        dataCard={props.dataCard}
        updateDataCard={props.updateDataCard}
        fillCollapsed={props.fillCollapsed}
        handleCollapsables={props.handleCollapsables}
      />

      <Share
        handleCreateCard={handleCreateCard}
        dataCard={props.dataCard}
        preview={props.preview}
        handleCollapsables={props.handleCollapsables}
        shareCollapsed={props.shareCollapsed}
      />
    </form>
  );
};
export default Form;
