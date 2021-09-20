import React, { Component } from 'react'
//import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
`
const Button = styled.a.attrs({
    className: 'btn btn-primary',
})`
    background: #150050;
    border: 0px solid #610094;
    border-radius: 30px;
    margin: 0.5rem 1rem;
`

const Abstract = styled.p`
    color: #150050;
    font-size: 1em;
    margin-left: 120px;
    margin-top: 60px;
    margin-right: 30vw;
`   

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #150050;
    margin-left: 88px;
    margin-bottom:  0;
    font-size: 3em;
`
const Subtext = styled.div`
    color: color: #150050;
    margin-left: 500px;
    margin-top: 10px;
    font-size: 0.5em;
`

const CardLight = styled.div`
text-align:center;
position: fixed;
bottom:0;
width: 20vw;
height: 30vh;
box-sizing: border-box;
padding: 2em;
border-radius: 25px 25px 0 0;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #0000;
margin-right: 1em;
`

const CardDark = styled.div`
text-align:center;
position: fixed;
bottom:0;
width: 20vw;
height: 45vh;
box-sizing: border-box;
padding: 2em;
border-radius: 25px 25px 0 0;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #0000;
margin-right: 1em;
background: linear-gradient(#150050, #63B4B8 100%);
`

class Homepage extends Component {
    render(){
        return(
            <Wrapper>
                <Title>
                    Introducción al Desarrollo Web
                    <Subtext>
                        Por dónde empezar?
                    </Subtext>
                </Title>

                <Abstract>
                    Ya sea que le interese el desarrollo Front end, Back end o Full Stack, incluso si no tiene idea de lo que significan estos términos, en este sitio encontrará la información y recursos necesarios para inciar el proceso de aprendizaje en el ámbito del desarrollo web de una forma eficiente.
                </Abstract>
                <div style={{position: "absolute", right: "8vw", top: "20vh"}}>
                    <iframe src="https://giphy.com/embed/xThuWu82QD3pj4wvEQ" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                
                <CardLight style={{left:"7.5vw", background: "linear-gradient(160deg, #3F0071, #63B4B8 100%)"}}>
                    <h2>
                        Front End
                    </h2>
                    <p>
                        Relacionado con la interfaz que se le presenta al usuario; el diseño visual, estructura y presentación de la aplicación web.
                    </p>
                    <Button href="/frontend">Quiero saber más</Button>
                </CardLight>

                <CardLight style={{right:"7.5vw", background: "linear-gradient(-160deg, #3F0071, #63B4B8 100%)"}}>
                    <h2>
                        Back End
                    </h2>
                    <p>
                        Relacionado con las funcionalidades de la aplicación web del lado del servidor. Consiste en el manejo de interacciones entre la aplicación, el servidor y la base de datos
                    </p>
                    <Button href="/backend">Cuentame más</Button>
                </CardLight>

                <CardDark style={{right:"40vw"}}>
                    <h2>
                        Full Stack
                    </h2>
                    <p>
                        Un desarrollador Full Stack está en capacidad de involucrarse en el desarrollo tanto del Back End como del Front End.
                    </p>
                    <Button href="/fullstack">Me interesa</Button>
                </CardDark>

            </Wrapper>



        )
    }

}


export default Homepage