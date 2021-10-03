import React from "react";
import "../App.css";

function Test(text) {
    const message = text ?? 'Nothing to display';
    
    console.log(message);
    
    
}

export default Test;