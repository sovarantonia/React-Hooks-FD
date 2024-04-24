
import React, {useEffect} from "react";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "./CodeSnippet.css"

const CodeSnippet = ({ code, language }) => {
    useEffect(() => {

        Prism.highlightAll();
    }, []);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);

        alert("Code copied to clipboard!");
    };
    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
            <button onClick={handleCopy} className="button">Copy Code</button>
        </pre>
    );
};

export default CodeSnippet;

