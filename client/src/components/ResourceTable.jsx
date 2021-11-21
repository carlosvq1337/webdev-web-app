import React from 'react';
import './ResourceTable.css'

function ResourceTable() {
    return(
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h4 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Recursos Front End
      </button>
    </h4>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">

        <p>Recursos para profundizar en temas alusivos al desarrollo <span class="it">front end</span>.</p>

        <ol>
            <li><strong><a href="https://devdocs.io/html/" target="_blank" rel="noreferrer" class = "external-link">HTML - Docs</a></strong></li>


            <li><strong><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" rel="noreferrer" class = "external-link">HTML - Referencia</a></strong></li>


            <li><strong><a href="https://devdocs.io/css/" target="_blank" rel="noreferrer" class = "external-link">CSS - Docs</a></strong></li>


            <li><strong><a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference" target="_blank" rel="noreferrer" class = "external-link">CSS - Referencia</a></strong></li>


            <li><strong><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" 
            rel="noreferrer" class = "external-link">Bootstrap - Getting Started</a></strong></li>


            <li><strong><a href="https://www.bootstrapcdn.com/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - CDN</a></strong> <br /></li>

            <li><strong><a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - Grid System</a></strong></li>

            <li><strong><a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" class = "external-link">JavaScript - Docs</a></strong></li>


            <li><strong><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" class = "external-link">React - Getting Started</a></strong></li>


        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h4 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Recursos de Diseño
      </button>
    </h4>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Recursos para profundizar en temas alusivos al desarrollo <span class="it">front end</span>.</p>

<ol>
    <li><strong><a href="https://devdocs.io/html/" target="_blank" rel="noreferrer" class = "external-link">HTML - Docs</a></strong></li>


    <li><strong><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" rel="noreferrer" class = "external-link">HTML - Referencia</a></strong></li>


    <li><strong><a href="https://devdocs.io/css/" target="_blank" rel="noreferrer" class = "external-link">CSS - Docs</a></strong></li>


    <li><strong><a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference" target="_blank" rel="noreferrer" class = "external-link">CSS - Referencia</a></strong></li>


    <li><strong><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" 
    rel="noreferrer" class = "external-link">Bootstrap - Getting Started</a></strong></li>


    <li><strong><a href="https://www.bootstrapcdn.com/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - CDN</a></strong> <br /></li>

    <li><strong><a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - Grid System</a></strong></li>

    <li><strong><a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" class = "external-link">JavaScript - Docs</a></strong></li>


    <li><strong><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" class = "external-link">React - Getting Started</a></strong></li>


</ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h4 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Recursos Back End
      </button>
    </h4>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Recursos para profundizar en temas alusivos al desarrollo <span class="it">back end</span>.</p>

<ol>
    <li><strong><a href="https://devdocs.io/html/" target="_blank" rel="noreferrer" class = "external-link">HTML - Docs</a></strong></li>


    <li><strong><a href="https://developer.mozilla.org/es/docs/Web/HTML/Element" target="_blank" rel="noreferrer" class = "external-link">HTML - Referencia</a></strong></li>


    <li><strong><a href="https://devdocs.io/css/" target="_blank" rel="noreferrer" class = "external-link">CSS - Docs</a></strong></li>


    <li><strong><a href="https://developer.mozilla.org/es/docs/Web/CSS/Reference" target="_blank" rel="noreferrer" class = "external-link">CSS - Referencia</a></strong></li>


    <li><strong><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" 
    rel="noreferrer" class = "external-link">Bootstrap - Getting Started</a></strong></li>


    <li><strong><a href="https://www.bootstrapcdn.com/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - CDN</a></strong> <br /></li>

    <li><strong><a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank" rel="noreferrer" class = "external-link">Bootstrap - Grid System</a></strong></li>

    <li><strong><a href="https://devdocs.io/javascript/" target="_blank" rel="noreferrer" class = "external-link">JavaScript - Docs</a></strong></li>


    <li><strong><a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" class = "external-link">React - Getting Started</a></strong></li>


</ol>
      </div>
    </div>
  </div>
</div>
    );
}

export default ResourceTable;



