const sendToApi = (data) => {
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(
      (serverResp) => {
        console.log(serverResp);
        return serverResp.cardURL;
      }

      /*   if (serverResp.success) {
        
        messageCard.innerHTML = "La tarjeta ha sido creada";
        urlCard.innerHTML = serverResp.cardURL;
        urlCard.href = 
        backgroundCreate();
        removeCollapsed(buttonTwitter);
      } else {
        messageCard.innerHTML = "Debes rellenar todos los campos";
      }*/
    );
};
export default sendToApi;
