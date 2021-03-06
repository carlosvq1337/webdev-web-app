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
border-radius: 50px;
background: #150050;
padding: 10px 22px;
color #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
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
    margin-top: 100px;
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
box-shadow: 5px 5px 10px #150050;
margin-right: 1em;
background: linear-gradient(#3F0071, #87CFFE 100%);
transition: transform 250ms, box-shadow 250ms;
&:hover{
    transform: translateY(-10px);
    box-shadow: 10px 10px 15px #150050;
}
`
const CardDark = styled.div`
text-align:center;
bottom:0;
box-sizing: border-box;
padding: 2em;
border-radius: 25px;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #150050;
margin-right: 1em;
background: linear-gradient(#150050, #87CFFE 100%);
transition: transform 250ms, box-shadow 250ms;
&:hover{
    transform: translateY(-10px);
    box-shadow: 10px 10px 15px #150050;
}
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
                                Introducci??n al Desarrollo Web
                                <Subtext>
                                    Por d??nde empezar?
                                </Subtext>
                            </Title>
                        </div>
                    </div>
                    <div class = "row">
                        <div class="col-8">
                            <Abstract>
                                Ya sea que le interese el desarrollo Front end, Back end o Full Stack, incluso si no tiene idea de lo que significan estos t??rminos, en este sitio encontrar?? la informaci??n y recursos necesarios para inciar el proceso de aprendizaje en el ??mbito del desarrollo web de una forma eficiente.
                            </Abstract>
                        </div>
                        <div class="col-sm-4 text-center">
                            <div><iframe src="https://giphy.com/embed/xThuWu82QD3pj4wvEQ" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
                        </div>
                    </div>
                    <div class="row align-items-end">
                        <div class="col">
                            <CardLight>
                                <h2>
                                    Front End
                                </h2>
                                <p>
                                    Relacionado con la interfaz que se le presenta al usuario; el dise??o visual y estructura de la aplicaci??n web.
                                </p>
                                <Button href="/frontend">Quiero saber m??s</Button>
                            </CardLight>
                        </div>
                        <div class="col">
                            <CardDark>
                                <h2 class="header">
                                    Full Stack
                                </h2>
                                <p>
                                    Un desarrollador Full Stack est?? en capacidad de involucrarse en el desarrollo tanto del Back End como del Front End.
                                </p>

                                <Button href="/fullstack">Me interesa</Button>
                            </CardDark>
                        </div>
                        <div class="col">
                            <CardLight>
                                <h2>
                                    Back End
                                </h2>
                                <p>
                                    El manejo de interacciones entre la aplicaci??n, el servidor y la base de datos. Las funcionalidades que el usuario no ve.
                                </p>
                                <Button href="/backend">Cuentame m??s</Button>
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