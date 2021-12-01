import React, { Component } from "react";
import { TableOfContents, Content, ScrollButton } from "../components";

class Contentpage extends Component {

    render(){
        return(
            <>
            <div class = "container-fluid">
                <div class = "row justify-content-around">
                <div class = "col-2 d-none d-xl-block ml-4">
                        <TableOfContents/>
                        <ScrollButton/>
                    </div>
                    <div class = "col-12 col-xl-9 ">
                        <Content/>
                        
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default Contentpage;
