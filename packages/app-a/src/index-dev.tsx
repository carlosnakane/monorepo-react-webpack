import { render } from "react-dom";
import * as React from "react";
import AppA from "./";

const rootElement = document.getElementById("root");

const WithInfra = () => (<div>
    <AppA />
</div>);

render(<WithInfra />, rootElement);
