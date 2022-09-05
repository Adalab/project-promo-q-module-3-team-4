Awesome Profile Cards

Este proyecto se divide en dos partes. La primera: “Un caso de código heredado”, realizada durante el módulo 3; y la segunda: “Desarrollo de un servidor web”, elaborada durante el módulo 4.

1. Un caso de código heredado
   En esta primera parte del proyecto hemos trabajado sobre un código heredado de nuestras compañeras de Adalab, quienes realizaron una aplicación de creación de tarjetas de visita en JavaScript. Nuestro objetivo era convertir dicho código a React, y que la aplicación siguiera funcionando a la perfección.
   Objetivos
   • Lidiar con código heredado y ser capaces de refactorizarlo.
   • Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos.
   • Aprender a usar React para crear una aplicación web sencilla.
   • Aprender a buscar información en la documentación de librerías externas.
   • Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.
   Especificaciones
   Hemos partido de un proyecto funcional, que debíamos mantenerlo, evolucionarlo y refactorizarlo, usando las siguientes nuevas características:
   • React para la estructuración del JS de la aplicación
   • Transiciones y/o animaciones para mejorar interacciones con la aplicación
   • React router, para la navegación entre las distintas páginas de la aplicación

2. Desarrollo de un servidor web
   En esta parte del proyecto hemos desarrollado nuestro primer servidor web, que tiene la misma funcionalidad que el servidor que usaba la aplicación desde el inicio, y que había sido creado por las profesoras de Adalab.
   Para saber que el nuevo servidor está bien programado, este debía responder con exactamente los mismos datos y ficheros con los que lo hacía el servidor inicial.
   Objetivos
   • Fortalecer el aprendizaje de las tecnologías Node JS y Express JS para aprender a escuchar peticiones desde los navegadores.
   • Consolidar el aprendizaje de SQL para trabajar con bases de datos y guardar los datos de las usuarias de forma persistente.
   • Reforzar el aprendizaje de API Rest para saber cómo estructurar y organizar las comunicaciones entre un navegador y un servidor de forma óptima.
   • Ser capaces de realizar un proyecto web completo (front end + back end), sin necesidad de solicitar ayuda a ningún otro equipo de desarrollo.
   • Mejorar la comunicación entre los miembros del equipo y con otros equipos de desarrollo.

Especificaciones
El servidor desarrollado crea una nueva tarjeta a través del API.
La web envía una petición con datos al servidor para crear una tarjeta. Por cada una de estas peticiones el servidor debe:
Comprobar que los datos recibidos desde el navegador son correctos; en caso de que no lo sean, el servidor debe devolver una respuesta de error. Y en caso que sí, el servidor debe:
• Guardar los datos en una base de datos.
• Generar un id o uuid único para la nueva tarjeta.
• Generar una URL con el id o uuid para que cuando se acceda a ella se visualice la tarjeta creada por la usuaria.
• Devolver una respuesta al navegador con esta URL.
• Visualizar una tarjeta existente a través del motor de plantillas
• Cada vez que se crea una tarjeta desde la web, el servidor asocia una URL a cada tarjeta. Cuando se accede a esta URL el servidor debe mostrar una página con los datos de la tarjeta: datos y foto, y colores de la tarjeta.

En el presente repositorio se ha trabajado la priemra parte, y en este, la segunda: project-promo-q-module-4-team-4
