import { QKInstance, QKModule, QKWindow } from "quark-html5"; // Modifies the prototypes automatically
import * as URI from "urijs";

// Get the current version
// document.write(`The current version is ${process.version}`);

// Create an rootElement
let rootElement = document.createElement("div");
document.body.appendChild(rootElement);

// Create and start the instance
let instance = new QKInstance(new QKModule(new URI("/Users/NathanFlurry/Documents/Dev/Vesto/Code/test-module")));
instance.start(rootElement);

// Style element after start because RootView modifies the CSS
rootElement.style.position = "absolute";
rootElement.style.width = "";
rootElement.style.height = "";
rootElement.style.left = "0";
rootElement.style.right = "0";
rootElement.style.top = "0";
rootElement.style.bottom = "0";
