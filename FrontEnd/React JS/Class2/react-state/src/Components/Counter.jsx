import React from "react";

const Counter;


function Counter() {
    let count = 0;
    const increment = () => {
        setCounter((prev) => prev++);
        console.log(Counter);
        
    };

    console.log(count);

    return (
        <div className="place-content-center">
            <h1 className="flex place-content-center" onClick={increment}>Count: {count}</h1>
            <button className="border-4 bg-gray-400 p-2 border-pink-600 hover:bg-slate-800 text-white">Click</button>
        </div>
    );
}

export default Counter;
