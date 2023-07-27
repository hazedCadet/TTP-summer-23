// Your code here!

import React from "react";
import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<h1>Hello World</h1>);

// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(<h1>Hello from React!</h1>);

/* ADD BEFORE ROOT!!!! */
// function Counter {
//     return (
//       <div id="container">
//         <div id="navbar">Counter.js</div>
//         <div id="counter">
//           <h1>0</h1>
//           <button>Increment</button>
//         </div>
//       </div>
//     );
//   }

const root = ReactDOM.createRoot(document.getElementById("app"));

function Counter {
    return (
        <div id="container">
            <div id="navbar">Counter.js</div>
            <div id="counter">
                <h1>0</h1>
                <button>Increment</button>
            </div>
        </div>
    );
}

root.render(<Counter/>)