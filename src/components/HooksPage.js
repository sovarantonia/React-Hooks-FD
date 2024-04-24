import React, {Component} from "react";
import "./PagesStyles.css";
import {Link} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import {HorizontalAccordionTypes} from "./HorizontalAccordionTypes";

export default class HooksPage extends Component {
    render() {
        return (
            <div className="hooks-container">
                <h1> REGULAR HOOKS </h1>
                <h2>What is a Hook?</h2>
                <h3 style={{fontStyle: "bold", fontSize: "24", color: "red"}}>DEFINITION:</h3>
                <p style={{fontSize: 20}}> Hooks allow function components to have access to state and other React features.</p>
                <p style={{fontSize: 20}}> They don’t work inside classes — they let you use React without classes.</p>

                <p style={{fontSize: 20}}> I) Hooks can only be called inside React function components. </p>
                <p style={{fontSize: 20}}> II) Hooks can only be called at the top level of a component. </p>

                <p style={{fontSize: 20}}> You can also create custom hooks when you have component logic that needs to be used by multiple components. </p>

                <h1> COMMON (BUILT-IN) HOOKS </h1>
                <HorizontalAccordionTypes/>
                <Link href="/Examples" style={{ textDecoration: 'none', color: "#E68E77", fontSize: 20}}>
                    <ArrowForward style={{color: "#E68E77", fontSize: 20}}/> Go to Examples
                </Link>
            </div>
        )
    }
}