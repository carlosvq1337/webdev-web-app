
import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'

//STYLING
const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px)/2);
z-idex: 10;
background: #150050;

`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: #87CFFE;
}
&:hover{
    transition: all 0.2s ease-in-out;
    font-size: 1.5em;
    color: #FFF;
}
`

const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font0size: 1.8rem;
    cursor: pointer;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: --24px;

@media sceen and (max-width: 768px){
    display: none;
}
`

const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`
const NavBtnLink = styled(Link)`
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


const Loginbar = () => {
    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img src={require('../logo.svg')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/contenido' activeStyle>
              Contenido
            </NavLink>
            <NavLink to='/Recursos' activeStyle>
              Recursos
            </NavLink>
            <NavLink to='/Contacto' activeStyle>
              Contacto
            </NavLink>
            <NavLink to='/Acerca' activeStyle>
              Acerca
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Iniciar sesión</NavBtnLink>
          </NavBtn>
        </Nav>
      </>       
            
        
    )
}

export default Loginbar



// const Wrapper = styled.div.attrs({
//     className: 'form-group',
// })`
//     margin-bottom: 75px;
//     margin-left: 40px;
//     padding-top: 40px;
// `

// class Loginbar extends Component {
//     render() {
//         return (

//             <Wrapper>
 
//                     <Logo />
//                     <Link to="/Login" style={{color: "#150050", textDecoration: 'none'}}>Iniciar sesión / Registrarse</Link>
//                     <NavButtons />

//             </Wrapper>

//         )
//     }
// }

// export default Loginbar
