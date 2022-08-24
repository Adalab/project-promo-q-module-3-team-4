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

  const 


  return (
    <form action="" className="form-container js_all_inputs">
      <Design handleInput={handleInput} dataCard={props.dataCard} />

      <Fill handleInput={handleInput} dataCard={props.dataCard}/>

      <Share handleCreateCard={handleCreateCard} dataCard={props.dataCard} preview={props.preview}/>

    
    </form>
  );
};
export default Form;
