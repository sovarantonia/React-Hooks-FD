import React, { Component } from "react";
import { Link } from "@mui/material";

export default class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="https://kinsta.com/wp-content/uploads/2023/04/react-hooks-must-be-called-in-a-react-function-component-or-a-custom-react-hook-function.jpg" alt="Image 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <Link href={"/Hooks"} style={{ position: "absolute", bottom: "20px", textDecoration: "none", color: "white", fontFamily: "Copperplate Gothic Light", background: '#E68E77', fontSize: 30, padding: "10px 20px", borderRadius: "5px" }}>
                        Go to introduction
                    </Link>
                </div>
            </div>
        )
    }
}