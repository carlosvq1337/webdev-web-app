import React, { Component } from "react";
import { TableOfContents, Content, Kanye_rest_api } from "../components";

class Contentpage extends Component {

    render(){
        return(
            <>
            <div class = "container-fluid">
                <div class = "row justify-content-around">
                <div class = "col-2 d-none d-xl-block ml-4">
                        <h4>Contenido</h4>
                        <TableOfContents/>
                    </div>
                    <div class = "col-12 col-xl-9 ">
                        <Kanye_rest_api/>
                        <Content/>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Contentpage;
