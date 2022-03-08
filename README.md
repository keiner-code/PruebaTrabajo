# Proyecto Creado Con  Create React App


## Available Scripts

Ejecutar Este Proyecto en modo Desarrolador
### `npm start`

Abrir en  [http://localhost:3000](http://localhost:3000) to view it in your browser.

Estructura Del Pryecto

Se Instalo `react-router-dom` para controlar las rutas del proyecto las cuales se encuentra gestionada 
en la carpeta `routes` en el archivo `App.js`

Se Instalo `firebase` globalmente y se utilizo como backend en el proyecto

en la Carpeta `pages` se encuentra las paginas de este proyecto

`home` que es la pagina principal renderiza `FormRegisterContainer` que es un contenedor del componente `FormRegister`
que se encargar de agregar los registro

`listTrgister` esta pagina renderiza `ContainerList` que es un contenedor de `RegisterItem` la cual renderiza todos los registro agregado y los muestr en pantalla de forma dinamica 

`CrudRegister` esta pagina renderiza `CrudRegisterContainer` que es un contenedor de `CrudRegisterItem` la cual contiene las operaciones basica de un crud

la carpeta `context` contiene el archivo `AppContext` la cual gestiona el  hooks `useContext` que se encargar de comunicar los datos a todos los niveles de los componente logrando asi que los componente se comuniquen unos con otros

la carpeta `hooks` contiene un hooks customizado en la cual se gestiona el backend del proyecto se obtienen los datos y se hacen las operaciones requeridad 

como backend utilizamos la base de datos `Cloud Firestore` de firebase en el archivo `firebase.js` se encuentra las credenciales del servicio

en la carpeta `style` encontramos todos los estilos urilizado en el proyecto 
