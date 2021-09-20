import React, { Component } from 'react'
import styled from 'styled-components'


const Button = styled.a.attrs({
    className: 'btn btn-primary',
})`
    background: #150050;
    border: 0px solid #610094;
    border-radius: 30px;
    margin: 0.5rem 1rem;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    position: absolute;
    right: 40px;
    top: 40px;
`


class NavButtons extends Component {
    render(){
        return(

                <Wrapper>
                    <Button href="/Homepage">Inicio</Button>
                    <Button href="/movies/create">Create Movie</Button>
                    <Button href="/movies/list">Edit/View Movies</Button>
                </Wrapper>




            
        )
    }
}

export default NavButtons