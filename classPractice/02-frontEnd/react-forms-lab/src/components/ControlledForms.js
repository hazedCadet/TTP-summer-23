// import React from "react";
// import useState from "react";
import React, { useState } from "react";

function ControlledForm(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault;
        console.log(name, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;