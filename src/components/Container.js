import React, { Component } from "react";
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import NotFound from './NotFound';
import HooksPage from './HooksPage'
import ExamplesPage from './ExamplesPage'
export default class Container extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Hooks" element={<HooksPage />} />
                    <Route path="/Examples" element={<ExamplesPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        )
    }
}


