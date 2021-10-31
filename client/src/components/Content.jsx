import React from 'react';
import './Content.css';
import { KanyeRestApi } from '.';
import webdev_diagram from '../webdev_diagram.svg';


const Content = () => {
    return (
        <div class = "content-wrapper">
        <h2 id = "webdev-intro">Breve introducción</h2>
        <p>Las teccnologías de desarrollo web se dividen en dos categorías principales, que juntas conforman lo que se conoce como el desarrollo  <span class="it">full stack</span>. Esta división comprende las tecnologías dedicadas al desarrollo <span class="it">front end</span> y aquellas dedicadas el desarrollo <span class="it">back end</span>. El término <span class="it">front end</span> de forma resumida, hace alusión a la interfaz de usuario, mientras que el término <span class="it">back end</span> se refiere al servidor, base de datos y aplicación que maneja la comunicación entre estos, para implementar las funcionalidades y desplegar la información al usuario. 
        <br />
        <img src={webdev_diagram} alt="diagram" class = "content_image"/>
        <br />
        Para manejar la interacción entre el <span class="it">front end</span> y el <span class = "it">back end</span> se implementan APIs, estos son los encargados de realizar las solicitudes al <span class = "it">back end</span>, es decir al servidor y su base de datos asociada, retornándole el resultado obtenido al <span class = "it">front end</span>. El funcionamiento y capacidades de los APIs se cubre más a fondo en la sección <a href="#js" class = "link-to-section">JavaScript/</a><a href="#apis" class = "link-to-section">APIs</a>.
        </p>
        <h2 id = "front-end">Tecnologías Front-end</h2>
        <p>Existen dos principales lenguajes utilizados en el desarrollo <span class="it">front end</span>. El primero es conocido como HTML. Este es conocido como el componente más básico de la Web. En el ámbito del desarrollo web, específicamente <span class="it">front end</span>, el lenguaje HTML es utilizado para describir la estructura y distribución de los elementos en pantalla, de una forma muy básica.
        <br />
        En segundo lugar, CSS permite modificar el estilo de los elementos HTML; cambiar su tamaño, tipo de letra, color, etc. La implementación en conjunto de estas dos tecnologías permiten un alto nivel de detalle a la hora de desarrollar la interfaz gráfica que es presentada al usuario.
        <br />
        JavaScript es el tercer lenguaje involucrado en el <span class="it">front end</span>, sin embargo este no es utilizado para afectar la apariencia de las aplicaciones web directamente, como lo hacen CSS o HTML, sino que más bien permite introducir funcionalidades a nivel de cliente, lo que lo hace una herramienta increíblemente útil y con mucha profundidad.
        </p>
            <h3 id = "html">HTML</h3>
            <p>El lenguaje HTML permite etiquetar secciones de texto, imágenes y demás contenido, de forma que según la etiqueta utilizada, se le asignen atributos correspondientes al contenido etiquetado. En el lenguaje HTML existen elementos especiales, con características predefinidas que resultan increíblemente útiles. En el siguiente <span class="it">codepen</span> se puede apreciar una estructura muy básica descrita en HTML con elementos <kbd>&lt;body&gt;</kbd>, <kbd>&lt;h3&gt;</kbd>, <kbd>&lt;p&gt;</kbd> y <kbd>&lt;br /&gt;</kbd>.</p>

            <iframe height="300" scrolling="no" title="html_example" src="https://codepen.io/carlosevq/embed/WNEOLOX?default-tab=html%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/carlosevq/pen/WNEOLOX">
            html_example</a> by Carlos (<a href="https://codepen.io/carlosevq">@carlosevq</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>

            <p>Para una lista completa y actualizada de los elementos HTML existentes, puede referirse a la <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" rel="noreferrer" class = "external-link">Referencia de Elementos HTML</a> en MDN Web Docs de Mozilla. Siéntase en toda la libertad de editar el código HTML en el <span class="it">codepen</span> a su gusto y el resultado se actualizará automáticamente.</p>


            <h3 id = "CSS">CSS</h3>
            <p>Mientras que HTML es extremadamente útil para describir la estructura y elementos de las páginas, es muy limitado en lo que concierne a la personalización de los elementos y su apariencia. Para esto se introduce CSS a las tecnologías del desarrollo web. CSS permite definir estilos para cada uno de los elementos HTML existentes. Un estilo permite modificar las propiedades de cada elemento: su tamaño, posición, color de fondo, etc. En el siguiente <span class="it">codepen</span> se aplican estilos a cada elemento HTML presente en el ejemplo. En el caso del elemento <kbd>&lt;body&gt;</kbd>, se utiliza un selector de elemento, mientras que para los elementos  <kbd>&lt;h3&gt;</kbd> y <kbd>&lt;p&gt;</kbd> se utilizan selectores de clase. Los selectores de elemento siguen el formato <kbd>element</kbd> mientras que los de clase siguen el formato <kbd>.className</kbd>. En el <span class="it">codepen</span> puede mirar las modificaciones realizadas al código HTML para incluir las clases necesarias, así como también el código CSS donde se definen los estilos por medio de los selectores mencionados.</p>
        

            <iframe height="300" scrolling="no" title="Untitled" src="https://codepen.io/carlosevq/embed/WNEOPvg?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/carlosevq/pen/WNEOPvg">
            Untitled</a> by Carlos (<a href="https://codepen.io/carlosevq">@carlosevq</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>

            <p>Para una referencia completa de CSS que comprende su sintaxis, índice de palabras clave, información sobre selectores y conceptos importantes, puede referirse a la <a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference" target="_blank" rel="noreferrer" class = "external-link">Referencia CSS</a> en MDN Web Docs de Mozilla. Siéntase en completa libertad de editar el código CSS en el <span class="it">codepen</span> para experimentar observando los resultados. </p>

            <h3 id = "Bootstrap">Bootstrap</h3>

            <p>Bootstrap es un conjunto de herramientas de código abierto que facilitan el proceso de diseño . De manera muy resumida, bootstrap permite acceder a una librería enorme de elementos con estilos y funcionalidades predefinidas de forma muy sencilla por medio de las clases HTML. En el siguiente <span class="it">codepen</span> se puede apreciar un ejemplo realizado por Chris Coyier, donde por medio de la red de distribución de contenido <a href="https://www.bootstrapcdn.com/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap CDN</a> se realiza la inclusión de las clases Bootstrap que luego son utilizadas en el código HTML. Cómo se puede observar en el mismo <span class="it">codepen</span>, el código CSS es mínimo, sin embargo los elementos poseen estilos complejos y muy atractivos, ya que se trata de los estilos Bootstrap asociados a las clases referenciadas desde el HTML.</p>

            <iframe height="400" scrolling="no" title="Example of Bootstrap on CodePen" src="https://codepen.io/chriscoyier/embed/hBzat?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/chriscoyier/pen/hBzat">
            Example of Bootstrap on CodePen</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>

            <p>Para una guía detallada de cómo añadir Bootstrap a cualquier aplicación web, puede referirse a la <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noreferrer" class = "external-link">Introducción a Bootstrap</a>.</p>

        <h2 id = "js">JavaScript</h2>

        <p>JavaScript es el primer lenguaje de programación que encontramos en este contexto. Similar a Python, este lenguaje también es interpretado y bastante ligero. Posee además soporte para programación orientada a objetos. Las características de este lenguaje lo hacen ideal para ser implementado en distintas áreas del desarrollo web, incluyendo tanto el <span class="it">front end</span> como el <span class="it">back end</span>. Javascript permite trabajar con variables para realizar las operaciones básicas como en la mayoría de los lenguajes de programación más conocidos. JavaScript también permite declarar funciones, esto se ejemplifica en el siguiente <span class="it">codepen</span> donde el usuario Giana implementó una calculadora que opera completamente con funciones JavaScript.</p> 

        <iframe height="850" scrolling="no" title="JavaScript calculator" src="https://codepen.io/giana/embed/GJMBEv?default-tab=js%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/giana/pen/GJMBEv">
        JavaScript calculator</a> by Giana (<a href="https://codepen.io/giana">@giana</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <p>Este ejemplo es un poco complejo para quién no es familiar con el lenguaje JavaScript. A continuación se presentan ejemplos sencillos que demuestran las funcionalidades más básicas y útiles de JavaScript.</p> 

            <h3 id = "event-listeners">Event Listeners</h3>

            <p>Los event listeners en JavaScript permiten establecer funciones asociadas a distintos eventos como por ejemplo el click del puntero por encima de algún elemento HTML. Para esto es necesario utilizar identificadores en los elementos HTML, esto se puede apreciar en el siguiente <span class="it">codepen</span>, donde se implementa un event listener en el elemento <kbd>p</kbd> con identificador <kbd>id = "clickable-card"</kbd> para cambiar la clase (y por tanto su apariencia por medio de selectores CSS) del elemento <kbd>h3</kbd> al hacer click sobre el elemento <kbd>p</kbd>.</p>

            <iframe height="300" scrolling="no" title="Untitled" src="https://codepen.io/carlosevq/embed/NWvgmyw?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="https://codepen.io/carlosevq/pen/NWvgmyw">
            Untitled</a> by Carlos (<a href="https://codepen.io/carlosevq">@carlosevq</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe>

            <p>Para más información sobre Event Listeners, y la lista de eventos que se pueden manejar con JavaScript, puede referirse a <a href="https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener" target="_blank" rel="noreferrer" class = "external-link">element.addEventListener()</a></p>


            <h3 id = "apis">APIs</h3> 

            <p>De las funcionalidades más poderosas de JavaScript. Las APIs permiten realizar solicitudesa los sin número de servicios disponibles en la web de forma sencilla. Por ejemplo, la API <a href="https://kanye.rest/" target="_blank" rel="noreferrer" class = "external-link">Kanye.Rest</a> retorna un objeto <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank" rel="noreferrer" class = "external-link">JSON</a> con una frase del artista Ye obtenida aleatoriamente de una base de datos. De esta manera, por medio de APIs,se pueden gestionar solicitudes a servicios web de manera interna, para desplegar informaciónde clima, información de películas, incluso datos sobre cualquier Pokemón específico. A continuación se muestra una frase del artista Ye, haciendo uso de la API mencionada previamente. Siéntase en libertad de refrescar esta página para observar una nueva frase aleatoria.</p>

            <KanyeRestApi/>
            <p>De la misma forma que se utiliza una API para solicitar información de servicios externos como el ejemplo anterior, las APIs también son implementadas para comunicar el <span class="it">front end</span> de las aplicaciones web a su respectivo  <span class="it">back end</span>. Por ejemplo, una aplicación web de comercio que necesite presentar al usuario con información sobre su última compra que es almacenada en una base de datos externa y asociada al servicio, haría uso de un API para realizar y manejar esta solicitud. Para una lista completa de las APIs nativas disponibles, puede referirse a la <a href="https://developer.mozilla.org/es/docs/Web/API" target="_blank" rel="noreferrer" class = "external-link">Referencia de la API Web</a></p>


        <h2 id = "back-end">Tecnologías Back-end</h2>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "SQL">Bases de datos SQL</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "NoSQL">Bases de datos NoSQL</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        <h2 id = "MERN">MERN</h2>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "Mongo">MongoDB</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "Express">Express</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "React">React</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h3 id = "Node">Node</h3>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
    );
};

export default Content;