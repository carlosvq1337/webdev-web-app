
import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.png'

//STYLING
const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
background: #88A863;
padding: 0.5rem calc((100vw - 1000px)/2);
z-idex: 10;
margin-bottom: 80px;
border-bottom-style: solid;
border-width: 3px;
broder-color: #150050;

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
    color: #87CFFE;
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
    background: #3F0071;
    color: #FFF;
}
&.active {
    color: #FFF;
    background: #3F0071;
}
`


const Loginbar = () => {
    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img src={logo} alt='logo' width="50px" />
          </NavLink>
          
          <NavMenu>
          <NavBtn>
            <NavBtnLink to='/contenido'>Contenido</NavBtnLink>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/recursos'>Recursos</NavBtnLink>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/contacto'>Contacto</NavBtnLink>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/acerca'>Acerca</NavBtnLink>
          </NavBtn>
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
