import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{
    id : "item"
},"Namaste React from Parcel");

const heading2= React.createElement("h2",{},"Namaste React 2");

const div = React.createElement("div", {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("box"));
root.render(div);