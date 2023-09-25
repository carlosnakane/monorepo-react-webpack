import { render } from "react-dom";
import * as React from "react";
import AppB from "./";

const rootElement = document.getElementById("root");

const WithInfra = () => (<AppB />);

render(<WithInfra />, rootElement);
