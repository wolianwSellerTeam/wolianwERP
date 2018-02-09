import React from "react";
import {render} from "react-dom";
import App from "./App.js";
import App1 from "./App1.js";

render(
	<App></App> ,
	document.getElementById("react-test")
);
render(
	<App1></App1>,
	document.getElementById("react-test2")
)



