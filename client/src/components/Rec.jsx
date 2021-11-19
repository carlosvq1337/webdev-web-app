import React from 'react';
import './Content.css';
import hp from '../mern-app-homepage.png'
import d1 from '../Docker1.jpg'
import d2 from '../Docker2.jpg'
import d3 from '../Docker3.jpg'
const Rec = () => {
    return (
        <div class = "content-wrapper">
                    <h2 id = "F-end">Recursos para el desarrollo</h2>

<div class="accordion accordion-flush" id="resource-accordion">
<div class="accordion-item">
<h3 class="accordion-header" id="panelsStayOpen-headingOne">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    Recursos para el desarrollo Front End
  </button>
</h3>
<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body"><table class="table">
        <thead>
            <tr>
            <th scope="col">Tecnología</th>
            <th scope="col">Recurso</th>
            <th scope="col">Descripción/Keywords</th>
            <th scope="col">Enlace</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">HTML</th>
            <td>Documentación HTML</td>
            <td>Docummentación general del lenguaje HTML, enlaces a tutoriales y acceso a documentación completa de cada elemento HTML.</td>
            <td><a href="https://devdocs.io/html/" target="_blank" rel="noreferrer" class = "external-link">devdocs.io</a></td>
            </tr>
            <tr>
            <th scope="row">HTML</th>
            <td>Referencia de Elementos HTML</td>
            <td>Listado de los elementos HTML existentes, con sus respectivas funciones y sintáxis, con enlaces a la documentación de cada elemento.</td>
            <td><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" rel="noreferrer" class = "external-link">MDN Webdocs</a></td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Documentación CSS</td>
            <td>Documentación completa de CSS, comprende la sintáxis de las reglas, selectores, animaciones y efectos, transformaciones, etc.</td>
            <td><a href="https://devdocs.io/css/" target="_blank" rel="noreferrer" class = "external-link">devdocs.io</a></td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Referencia CSS</td>
            <td>Listado completo de las palabras clave existentes en CSS con su respectiva descripción.</td>
            <td><a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference" target="_blank" rel="noreferrer" class = "external-link">MDN Webdocs</a></td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Bootstrap Getting Started</td>
            <td>Guía para implementar Bootstrap a cualquier proyecto por medio de Bootstrap CDN e introducción a Bootstrap.</td>
            <td><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap CDN</a></td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Bootstrap CDN</td>
            <td>Listado de los enlaces CDN de Bootstrap listos para producción.</td>
            <td><a href="https://www.bootstrapcdn.com/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap CDN</a></td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Bootstrap Grid</td>
            <td>Documentación de el sistema Bootstrap Grid.</td>
            <td><a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap Grid System</a></td>
            </tr>
            <tr>
            <th scope="row">JavaScript</th>
            <td>Documentación JavaScript</td>
            <td>Documentación completa de JavaScript, comprende documentación de las funciones, objetos, manejo de flujo, clases, declaraciones, e incluso hasta el manejo de memoria en JavaScript.</td>
            <td><a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" class = "external-link">devdocs.io</a></td>
            </tr>
            <tr>
            <th scope="row">React JS</th>
            <td>Guía ofical de React</td>
            <td>Una guía completa que cubre desde los primeros pasos de pruebas, ejemplos bien documentados y hasta enlaces a tutoriales recomendados.</td>
            <td><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" class = "external-link">reactjs.org</a></td>
            </tr>      
        </tbody>
    </table></div>
</div>
</div>
<div class="accordion-item">
<h3 class="accordion-header" id="panelsStayOpen-headingOne">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    Recursos para el Diseño
  </button>
</h3>
<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body"><table class="table">
        <thead>
            <tr>
            <th scope="col">Recurso</th>
            <th scope="col">Descripción</th>
            <th scope="col">Enlace</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Paletas de colores</th>
            <td>Provee paletas de colores preestablecidas para facilitar el proceso del diseño visual.</td>
            <td><a href="https://colorhunt.co/" target="_blank" rel="noreferrer" class = "external-link">colorhunt.co</a></td>
            </tr>
            <tr>
            <th scope="row">Code Playgrounds</th>
            <td>Editores de HTML, CSS y JS en línea que producen el resultado en tiempo real, muy útiles para probar funcionalidades sencillas, diseños CSS u observar pequeños snippets hechos por otras personas.</td>
            <td><a href="https://jsfiddle.net/" target="_blank" rel="noreferrer" class = "external-link">jsfiddle.net</a> <br /> <a href="http://jsbin.com/?html,output" target="_blank" rel="noreferrer" class = "external-link">jsbin.com</a> </td>
            </tr>
            
        </tbody>
    </table></div>
</div>
</div>
<div class="accordion-item">
<h3 class="accordion-header" id="panelsStayOpen-headingOne">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
    Recursos para el desarrollo Back End
  </button>
</h3>
<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
  <div class="accordion-body"><table class="table">
        <thead>
            <tr>
            <th scope="col">Tecnología</th>
            <th scope="col">Recurso</th>
            <th scope="col">Descripción/Keywords</th>
            <th scope="col">Enlace</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">HTML</th>
            <td>ayo</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">CSS</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">Javascript</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table></div>
</div>
</div>
</div>
<br />
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
        <p>Una vez terminada la inicialización del ambiente descrita en los pasos anteriores, las funcionalidades necesarias para el desarrollo se pueden manejar desde la interfaz gráfica del cliente Docker. Se recomienda utilizar el editor <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" class = "external-link">VS Code</a>, ya que Docker tiene soporte para este editor, y viceversa por medio de las extensiones disponibles en VS Code. Si se posee una instalación de VS Code, se puede hacer click en el botón mostrado en la siguiente imagen para acceder al código fuente de la plantilla, el cuál puede ser reemplazado o modificado para iniciar el proceso de desarrollo.</p>
        <img src={d1} alt="diagram" class = "content_image"/>
        <p>Durante el proceso de desarrollo puede surgir la necesidad de instalar paquetes npm que no existen en el ambiente Docker. Para esto, la terminal ligada al servicio <span class="it">front end</span> se puede acceder desde el botón mostrado en la siguiente imagen.</p>
        <img src={d2} alt="diagram" class = "content_image"/>
        <p>Finalmente, para observar los logs asociados a cada uno de los servicios puede hacer click sobre el nombre de cada uno de los contenedores, esto desplegará la consola respectiva, lo que es muy útil para observar los mensajes durante el proceso de debuggeo y troubleshooting. Un ejemplo de los logs asociados al <span class="it">front end</span> se muestra en la siguiente imagen.</p>
        <img src={d3} alt="diagram" class = "content_image"/>
        <p></p>

        </div>
    );
};

export default Rec;