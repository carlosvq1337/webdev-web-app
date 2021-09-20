
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import NavButtons from './NavButtons'


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-bottom: 75px;
    margin-left: 40px;
    padding-top: 40px;
`

class Loginbar extends Component {
    render() {
        return (

            <Wrapper>
 
                    <Logo />
                    <Link to="/Login" style={{color: "#150050", textDecoration: 'none'}}>Iniciar sesión / Registrarse</Link>
                    <NavButtons />

            </Wrapper>

        )
    }
}

export default Loginbar
