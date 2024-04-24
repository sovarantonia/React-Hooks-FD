import React, {Component} from "react";
import {AccordionListExamples} from "./AccordionListExamples";
import {Link} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

export default class ExamplesPage extends Component{
    render() {
        return (
            <div className="hooks-examples-container">
                <h1> EXAMPLES </h1>
                <AccordionListExamples />
                <Link href="/Hooks" style={{ textDecoration: 'none', color: "#E68E77", fontSize: 20}}>
                    <ArrowBack style={{color: "#E68E77", fontSize: 20}}/> Go to Definition
                </Link>
            </div>
        )
    }
}