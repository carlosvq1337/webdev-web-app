import React from 'react';
import './Content.css';
import hp from '../mern-app-homepage.png'
import d1 from '../Docker1.jpg'
import d2 from '../Docker2.jpg'
import d3 from '../Docker3.jpg'
const Rec = () => {
    return (
        <div class = "content-wrapper">


<h2 id = "deveEnv">Empezando a Desarrollar 🚀</h2>

      <p>El primer paso para empezar el proceso de desarrollo web es la instalación y configuración de un ambiente de desarrollo. Idealmente al ambiente de desaarrollo permite la creación y verificación de todas las funcionalidades deseadas de la aplicación web que se desarrolla, incluyendo tanto el <span class="it">front end</span> como el <span class="it">back end</span>.</p>

      <p>A continuación se detallan dos alternativas para implementar un ambiente de desarrollo con las tecnologías MERN.</p>

      <h2 id = "dev-node">Ambiente de desarrollo Node</h2>

      <p>Esta alternativa aborda la creación del ambiente de una forma directa, por medio de una instalación de NodeJS local, el administrador de paquetes NPM y ExpressJS, proceso que se describe en <a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/development_environment" target="_blank" rel="noreferrer" class = "external-link">Setting up a Node development environment</a> por MDN Web Docs.</p>

      <p>
      En adición a los pasos descritos por MDN Web Docs, para completar las tecnologías locales del stack MERN, se puede instalar React por medio de NPM con el siguiente comando desde la terminal: <kbd>npm i react</kbd>. Los paquetes soportados por npm se pueden consultar en <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer" class = "external-link">npmjs.com</a>.
      </p>

      

      <h2 id = "dev-docker">Ambiente de desarrollo Docker (MERN)</h2>

        <p>Como alternativa al proceso descrito anteriormente para crear un ambiente de desarrollo haciendo uso directo de NodeJS, se implementó un ambiente de desarrollo en un contenedor <a href="https://www.docker.com/" target="_blank" rel="noreferrer" class = "external-link">Docker</a>. Docker permite inicializar todos los servicios de Node necesarios para desarrollar tanto el <span class="it">front end</span> como el <span class="it">back end</span>, y una base de datos local MongoDB. De esta manera se simplifica enormemente el proceso de configuración del ambiente, instalación de paquetes e inicialización de los servicios necesarios para iniciar el desarrollo.</p>
        <h3 id = "pre-req">Pre-requisitos</h3>
        <p>Para desplegar este entorno de desarrollo en su computadora, debe tener Docker instalado. Puede descargar Docker desde: <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer" class = "external-link">Docker para Windows, Mac y Linux</a>. Además se debe descargar la plantilla disponible en el siguiente <a href="https://github.com/carlosvq1337/Dockerized-MERN" target="_blank" rel="noreferrer" class = "external-link">repositorio Github</a>, la cual además contiene los archivos de configuración Docker necesarios para inicializar el ambiente de desarrollo.</p>
        <h3 id = "env-creation">Creación del ambiente</h3>
        <p>Una vez instalado Docker y descargada la plantilla MERN con funciones CRUD, los siguientes pasos describen el proceso para iniciar el ambiente de desarrollo que contiene los tres servicios necesarios para desarrollar una aplicación <span class="it">full stack</span>:</p>
        <ul class = "content-list">
            <li>Desde una terminal en el directorio fuente de la plantilla descargada, ejecute el comando <kbd>docker-compose up --build</kbd>
            <br /> Esto construye el contenedor docker con los tres servicios mencionados, y es necesario ejecutarlo únicamente una vez; para construir dicho contenedor.
            </li>
            <li>Una vez terminado el proceso de inicialización (podría tardar varios minutos) puede dirigirse en su navegador a la dirección <kbd>localhost:8000</kbd>, donde podrá observar la página principal de la plantilla proveída:</li>
        </ul>
        <img src={hp} alt="diagram" class = "content_image"/>
        <ul class = "content-list">
            <li>Juegue con la plantilla y verifique la correcta operación de las funciones CRUD de la plantilla funcionan correctamente</li>

        </ul>
        <h3 id = "env-guide">Utilización del ambiente</h3>
        <p>Una vez terminada la inicialización del ambiente descrita en los pasos anteriores, las funcionalidades necesarias para el desarrollo se pueden manejar desde la interfaz gráfica del cliente Docker. Se recomienda utilizar el editor <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" class = "external-link">VS Code</a>, ya que Docker tiene soporte para este editor, y viceversa por medio de las extensiones disponibles en VS Code. Si se posee una instalación de VS Code, se puede hacer click en el botón mostrado en la siguiente imagen para acceder al código fuente de la plantilla, el cuál puede ser reemplazado o modificado para iniciar el proceso de desarrollo.</p>
        <img src={d1} alt="diagram" class = "content_image"/>
        <p>Durante el proceso de desarrollo puede surgir la necesidad de instalar paquetes npm que no existen en el ambiente Docker. Para esto, la terminal ligada al servicio <span class="it">front end</span> se puede acceder desde el botón mostrado en la siguiente imagen.</p>
        <img src={d2} alt="diagram" class = "content_image"/>
        <p>Finalmente, para observar los logs asociados a cada uno de los servicios puede hacer click sobre el nombre de cada uno de los contenedores, esto desplegará la consola respectiva, lo que es muy útil para observar los mensajes durante el proceso de debuggeo y troubleshooting. Un ejemplo de los logs asociados al <span class="it">front end</span> se muestra en la siguiente imagen.</p>
        <img src={d3} alt="diagram" class = "content_image"/>
       

        </div>
    );
};

export default Rec;