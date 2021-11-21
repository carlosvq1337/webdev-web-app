import React, { Component } from "react";
import {  } from "../components";
import Rec from "../components/Rec";
import { TableOfContents, ResourceTable } from "../components";

class Recursos extends Component {

    render(){
        return(
            <>
            <div class = "container-fluid">
                <div class = "row justify-content-around">
                <div class = "col-2 d-none d-xl-block ml-4">
                        <TableOfContents/>
                </div>
                <div class = "col-10 col-xl-7 ">
                    <Rec/>
                </div>
                <div class = "col-2 d-none d-xl-block ml-4">
                    <ResourceTable/>
                </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Recursos;
