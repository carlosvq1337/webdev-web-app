
import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'

//STYLING
const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: center;
background: #88A863;
padding: 0.5rem calc((100vw - 1000px)/2);
z-idex: 10;
margin-bottom: 80px;
border-bottom-style: solid;
border-width: 3px;
broder-color: #150050;

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
flex: 1 1 auto;
margin: 10px;
padding: 10px;
padding-right: 15px;
padding-left: 15px;
text-align: center;
text-decoration: none;
transition: 0.5s;
background-size: 200% auto;
color: white;
background-image: linear-gradient(to top, #150050 0%, #7232a6 120%, #150050 200%);
border-radius: 20px;
&:hover{
  background-position: top center;
  color: #FFF;
}
&.active {
    color: #000;
    background: #FFF;
    box-shadow: 0 0 5px #FFF;
}
`

const NavBtnLinkHP = styled(Link)`
flex: 1 1 auto;
margin: 10px;
padding: 10px;
padding-right: 15px;
padding-left: 15px;
text-align: center;
text-decoration: none;
transition: 0.5s;
background-size: 200% auto;
color: white;
background-image: linear-gradient(to top, #150050 0%, #7232a6 120%, #150050 200%);
border-radius: 20px;
&:hover{
  background-position: right center;
  color: #FFF;
}

`


const Loginbar = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavBtn>
            <NavBtnLinkHP to='/'>Inicio</NavBtnLinkHP>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/contenido'>Contenido</NavBtnLink>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/recursos'>Recursos</NavBtnLink>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/acerca'>Acerca</NavBtnLink>
          </NavBtn>
          </NavMenu>
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
