import {useEffect, useState} from "react";

export function UseEffectExample() {


      const [count, setCount] = useState(0);

      useEffect(() => {
        // Logic for when component mounts
          console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
          // Cleanup logic when component unmounts
        };
      }, []);

      useEffect(() => {
        // Logic for when 'count' state updates
          console.log('Count updated:', count);
      }, [count]);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );


}

