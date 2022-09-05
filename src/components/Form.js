import Design from './Design';
import sendToApi from '../services/api';
import Fill from './Fill';
import Share from './Share';

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
  };

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
