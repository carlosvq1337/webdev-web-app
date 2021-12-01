
import React from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import './Loginbar.css'

//STYLING
const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: center;
background: #88A863;
padding: 0.5rem calc((100vw - 1000px)/2);
margin-bottom: 80px;
border-bottom-style: solid;
border-width: 1px;
broder-color: #150050;
position: sticky;
position: -webkit-sticky; /* For Safari */
top: 0px; /* How far down the page you want your ToC to live */
/* Give table of contents a scrollbar */
max-height: calc(100vh - 40px);
padding-top: 10px;
z-index = 10;
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
padding: 7px;
padding-right: 15px;
padding-left: 15px;
text-align: center;
text-decoration: none;
transition: 0.5s;
background-size: 200% auto;
color: white;
background-color: #150050;
border-radius: 15px;
&:hover{
  background-color:#3F0071;
  color: #FFF;
}
`

const NavBtnLinkHP = styled(Link)`
flex: 1 1 auto;
margin: 10px;
padding: 7px;
padding-right: 15px;
padding-left: 15px;
text-align: center;
text-decoration: none;
transition: 0.5s;
background-size: 200% auto;
color: white;
background-color: #150050;
border-radius: 15px;
&:hover{
  background-color:#3F0071;
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
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Contenido
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/contenido#webdev-intro">Desarrollo Full Stack</a></li>
              <li><a class="dropdown-item" href="/contenido#front-end">Desarrollo Front End</a></li>
              <li><a class="dropdown-item" href="/contenido#back-end">Desarrollo Back End</a></li>
            </ul>
          </div>
          </NavBtn>
            <NavBtn>
            <NavBtnLink to='/recursos'>Recursos</NavBtnLink>
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
