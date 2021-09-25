import React, { Component } from 'react'
//import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
background: #BFE6FF
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
    margin-top: 5vh;
    font-weight: 500;
`   

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #150050;
    font-size: 3em;
`
const Subtext = styled.div`
    color: color: #150050;
    margin-top: 10px;
    font-size: 0.5em;
`

const CardLight = styled.div`
text-align:center;
margin-top: 10vh;
box-sizing: border-box;
padding: 2em;
border-radius: 25px;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #0000;
margin-right: 1em;
`

const CardDark = styled.div`
text-align:center;
bottom:0;
box-sizing: border-box;
padding: 2em;
border-radius: 25px;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #0000;
margin-right: 1em;
background: linear-gradient(#150050, #87CFFE 100%);
`


class Homepage extends Component {

    state = {   width: 0,
                height: 0};

    constructor(props){
        super(props);
        this.state = {
                width: 1920,
                height: 1080
        };
    };


    render(){
        return(
            <Wrapper>
                <div class="container">
                    <div class="row">
                        <div class="col text-left">
                            <Title>
                                Introducción al Desarrollo Web
                                <Subtext>
                                    Por dónde empezar?
                                </Subtext>
                            </Title>
                        </div>
                    </div>
                    <div class = "row">
                        <div class="col-8">
                            <Abstract>
                                Ya sea que le interese el desarrollo Front end, Back end o Full Stack, incluso si no tiene idea de lo que significan estos términos, en este sitio encontrará la información y recursos necesarios para inciar el proceso de aprendizaje en el ámbito del desarrollo web de una forma eficiente.
                            </Abstract>
                        </div>
                        <div class="col-sm-4 text-center">
                            <div><iframe src="https://giphy.com/embed/xThuWu82QD3pj4wvEQ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col">
                            <CardLight style={{background: "linear-gradient(160deg, #3F0071, #87CFFE 100%)"}}>
                                <h2>
                                    Front End
                                </h2>
                                <p>
                                    Relacionado con la interfaz que se le presenta al usuario; el diseño visual, estructura y presentación de la aplicación web.
                                </p>
                                <Button href="/frontend">Quiero saber más</Button>
                            </CardLight>
                        </div>
                        <div class="col">
                            <CardDark>
                                <h2>
                                    Full Stack
                                </h2>
                                <p>
                                    Un desarrollador Full Stack está en capacidad de involucrarse en el desarrollo tanto del Back End como del Front End.
                                </p>

                                <Button href="/frontend">Me interesa</Button>
                            </CardDark>
                        </div>
                        <div class="col">
                            <CardLight style={{background: "linear-gradient(-160deg, #3F0071, #87CFFE 100%)"}}>
                                <h2>
                                    Back End
                                </h2>
                                <p>
                                    El manejo de interacciones entre la aplicación, el servidor y la base de datos. Las funcionalidades que el usuario no ve.
                                </p>
                                <Button href="/frontend">Cuentame más</Button>
                            </CardLight>
                        </div>
                    </div>
                </div>
            </Wrapper>



        )
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

}


export default Homepage