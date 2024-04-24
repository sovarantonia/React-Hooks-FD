import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CodeSnippet from "./CodeSnippet";

import {CounterExample} from "./CounterExample";
import {UseEffectExample} from "./UseEffectExample";
import {ReducerExample} from "./ReducerExample";
import {RefExample} from "./RefExample";
import {CallbackExample} from "./CallbackExample";
import {MemoExample} from "./MemoExample";
import {ContextExample} from "./ContextExample";

export function AccordionListExamples() {

    //use state

    const useStateExample = `
import React, { useState } from 'react';

const Counter = () => {
  // Define state variable 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
`;


    const useEffectExample = `import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect with an empty dependency array
  useEffect(() => {
    // This code will run after the first render
    console.log('Component mounted');
    // You can perform side effects here, such as fetching data from an API
    // Remember to clean up any side effects in the cleanup function (optional)
    return () => {
      console.log('Component unmounted');
      // Cleanup code goes here
    };
  }, []); // Empty dependency array means this effect only runs once after the initial render

  // useEffect with a dependency
  useEffect(() => {
    // This code will run after every render if the 'count' state changes
    console.log('Count updated:', count);
    // You can perform side effects here that depend on the 'count' state
    return () => {
      // Cleanup code goes here
    };
  }, [count]); // 'count' is a dependency, so this effect will run whenever 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;`;


    //useContext
    const useContextExample = `import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Component that provides the context value
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Component that consumes the context value using useContext hook
const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
};

// Example usage of ThemeProvider and ThemeToggle components
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Toggle Example</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;`

    const useRefExample = ` import {useRef} from 'react';
const RefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export { RefExample};`

    const useReducerExample = `import {useReducer} from 'react';
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
export {ReducerExample};`

    const useCallbackExample = `import {useCallback} from 'react';
const CallbackExample = () => {
  const handleClick = useCallback(() => {
    alert('Button clicked');
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export {CallbackExample};`;

    const useMemoExample = `import {useMemo}  from 'react';
const MemoExample = () => {
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation');
    return 42;
  }, []);

  return (
    <div>
      Result: {expensiveCalculation}
    </div>
  );
};
export {MemoExample};`

    return (
        <div>

            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h2>useState</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> The React useState Hook allows us to track state in a function
                        component.</p>

                    <p style={{fontSize: 20}}> State generally refers to data or properties that need to be tracking in
                        an application. </p>

                    <div>
                        <CodeSnippet code={useStateExample} language="javascript"/>
                    </div>

                    <div>
                        <p style={{fontSize: 20}}> Code preview </p>
                        <CounterExample/>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useEffect</h2>
                </AccordionSummary>
                <AccordionDetails>

                    <p style={{fontSize: 20}}> The useEffect Hook allows you to perform side effects in your
                        components. </p>

                    <p style={{fontSize: 20}}> Some examples of side effects are: fetching data, directly updating the
                        DOM, and timers. </p>

                    <p style={{fontSize: 20}}> useEffect accepts two arguments. The second argument is
                        optional: <code>useEffect(&lt;function&gt;, &lt;dependency&gt;)</code></p>

                    <CodeSnippet code={useEffectExample} language="javascript"/>

                    <h3 style={{color: "red"}}>In this example: </h3>

                    <p style={{fontSize: 20}}>It manages a state variable count initialized to 0 using the useState
                        hook. It demonstrates the usage of the useEffect hook in two scenarios: </p>

                    <p style={{fontSize: 20}}>The first useEffect hook runs once after the initial render, logging
                        "Component mounted" to the console. It sets up any initial side effects and returns a cleanup
                        function for unmounting. </p>

                    <p style={{fontSize: 20}}>The second useEffect hook runs after every render if the count state
                        changes. It logs "Count updated: [value]" to the console, indicating the current value of count.
                        This hook allows performing side effects dependent on the count state and returns a cleanup
                        function. </p>

                    <h3 style={{fontSize: 20}}>Code preview: </h3>
                    <UseEffectExample/>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useContext</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}> React Context is a way to manage state globally. </p>
                    <p style={{fontSize: 20}}> It can be used together with the useState Hook to share state between
                        deeply nested components more easily than with useState alone. </p>
                    <CodeSnippet code={useContextExample} language="javascript"/>
                    <ContextExample/>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useRef</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}>The useRef Hook allows you to persist values between renders. </p>

                    <p style={{fontSize: 20}}>It can be used to store a mutable value that does not cause a re-render when updated. </p>

                    <p style={{fontSize: 20}}>It can be used to access a DOM element directly. </p>
                    <CodeSnippet code={useRefExample} language="javascript"/>
                    <h3 style={{fontSize: 20}}>Code preview: </h3>
                    <RefExample/>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useReducer</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}>The useReducer Hook is similar to the useState Hook. </p>

                    <p style={{fontSize: 20}}>It allows for custom state logic. </p>

                    <p style={{fontSize: 20}}>If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful. </p>

                            <p style={{fontSize: 20}}>The useReducer Hook accepts two arguments.

                                <code> useReducer(&lt;reducer&gt;, &lt;initialState&gt;>) </code> </p>
                    <CodeSnippet code={useReducerExample} language="javascript"/>
                    <h3 style={{fontSize: 20}}>Code preview: </h3>
                    <ReducerExample/>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useCallback</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}>The React useCallback Hook returns a memoized callback function. </p>

                    <p style={{fontSize: 20}}>This allows us to isolate resource intensive functions so that they will not automatically run on every render. </p>

                    <p style={{fontSize: 20}}>The useCallback Hook only runs when one of its dependencies update. </p>
                    <CodeSnippet code={useCallbackExample} language="javascript"/>
                    <h3 style={{fontSize: 20}}>Code preview: </h3>
                    <CallbackExample/>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{background: "#E8E8E8"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <h2>useMemo</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{fontSize: 20}}>The React useMemo Hook returns a memoized value. </p>


                    <p style={{fontSize: 20}}>The useMemo Hook only runs when one of its dependencies update. This can improve performance. </p>
                    <p style={{fontSize: 20}}>The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. </p>
                    <CodeSnippet code={useMemoExample} language="javascript"/>
                    <h3 style={{fontSize: 20}}>Code preview: </h3>
                    <MemoExample/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
