import React, { useState } from "react";
export function CounterExample() {
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
}

