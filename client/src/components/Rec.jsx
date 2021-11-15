import React from 'react';
import './Content.css';
import hp from '../mern-app-homepage.png'
import d1 from '../Docker1.jpg'
import d2 from '../Docker2.jpg'
import d3 from '../Docker3.jpg'
const Rec = () => {
    return (
        <div class = "content-wrapper">
        <h2 id = "deveEnv">Ambiente de Desarrollo</h2>
        <p>Para empezar el proceso de aprendizaje práctico, se implementó un ambiente de desarrollo en un contenedor <a href="https://www.docker.com/" target="_blank" rel="noreferrer" class = "external-link">Docker</a>. Docker permite inicializar todos los servicios de Node necesarios para desarrollar tanto el <span class="it">front end</span> como el <span class="it">back end</span>, y una base de datos local MongoDB. De esta manera se simplifica enormemente el proceso de configuración del ambiente, instalación de paquetes e inicialización de los servicios necesarios para iniciar el desarrollo.</p>
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
        <img src={d1} alt="diagram" class = "content_image"/>
        <img src={d2} alt="diagram" class = "content_image"/>
        <img src={d3} alt="diagram" class = "content_image"/>
        <p></p>
    3
        <h2 id = "F-end">Recursos Front End</h2>
        <h3 id = "F-end-tec">Referencias de Tecnologías</h3>
        <h3 id = "diseno">Diseño</h3>
        <h2 id = "B-end">Recursos Back End</h2>
        <h3 id = "B-end-tec">Referencias de Tecnologías</h3>
        
        </div>
    );
};

export default Rec;