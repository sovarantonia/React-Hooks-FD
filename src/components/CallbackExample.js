import React, { useCallback } from 'react';

export function CallbackExample() {
    const handleClick = useCallback(() => {
        alert('Button clicked');
    }, []);

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}