import React, { Component } from "react";
import {  } from "../components";
import Rec from "../components/Rec";
import { TableOfContents } from "../components";

class Recursos extends Component {

    render(){
        return(
            <>
            <div class = "container-fluid">
                <div class = "row justify-content-around">
                <div class = "col-2 d-none d-xl-block ml-4">
                        <TableOfContents/>
                    </div>
                    <div class = "col-12 col-xl-9 ">
                        <Rec/>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Recursos;
