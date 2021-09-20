import React, { Component } from 'react'
//import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
`

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #150050;
    margin-left: 88px;
    margin-bottom:  0;
`
const Subtext = styled.div`
    color: color: #150050;
    margin-left: 500px;
    margin-top: 10px;
    font-size: 0.5em;
`

const CardLight = styled.div`
position: fixed;
bottom:0;
width: 20vw;
height: 40vh;
box-sizing: border-box;
padding: 2em;
border-radius: 25px;
color: white;
line-height: 25px;
box-shadow: 5px 5px 10px #0000;
margin-right: 1em;
`

const CardDark = styled.div`
position: fixed;
bottom:0;
width: 20vw;
height: 50vh;
box-sizing: border-box;
padding: 2em;
border-radius: 25px;
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

                <CardLight style={{left:"7.5vw", background: "linear-gradient(160deg, #3F0071, #63B4B8 100%)"}}>
                    ayo
                </CardLight>

                <CardLight style={{right:"7.5vw", background: "linear-gradient(-160deg, #3F0071, #63B4B8 100%)"}}>
                    ayo
                </CardLight>

                <CardDark style={{right:"40vw"}}>
                    ayo
                </CardDark>

            </Wrapper>



        )
    }

}


export default Homepage