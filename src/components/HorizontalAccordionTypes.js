import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import React from "react";

export function HorizontalAccordionTypes (){
    return (
        <div style={{ display: 'flex' }}>
            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h4>useState</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The React useState Hook allows us to track state in a function component.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ flex: 1, background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h4>useEffect</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The useEffect Hook allows you to perform side effects in your components.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <h4>useContext</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React Context is a way to manage state globally.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <h4>useRef</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The useRef Hook allows you to persist values between renders.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <h4>useReducer</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The useReducer Hook is similar to the useState Hook.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <h4>useCallback</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The React useCallback Hook returns a memoized callback function.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ flex: 1, background: "#E8E8E8" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                >
                    <h4>useMemo</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The React useMemo Hook returns a memoized value.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>

    )
}