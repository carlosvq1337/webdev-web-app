import React, { Component } from "react";
import { TableOfContents, Content } from "../components";


class Contentpage extends Component {

    render(){
        return(
            <>
            <div class = "container">
                <div class = "row">
                    <div class = "col-8">
                        <Content/>
                    </div>
                    <div class = "col">
                        <TableOfContents/>
                    </div>
                </div>
            </div>
                
                
            </>
        )
    }
}
export default Contentpage;