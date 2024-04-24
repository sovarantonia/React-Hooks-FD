import React, { createContext, useContext, useState } from 'react';

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
export function ContextExample () {
    return (
        <ThemeProvider>
            <div>
                <h1>Theme Toggle Example</h1>
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

