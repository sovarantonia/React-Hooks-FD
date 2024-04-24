import {useMemo}  from 'react';
export function MemoExample (){
    const expensiveCalculation = useMemo(() => {
        console.log('Performing expensive calculation');
        return 42;
    }, []);

    return (
        <div>
            Result: {expensiveCalculation}
        </div>
    );
}
