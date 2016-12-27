import { QKInstance, QKModule, QKWindow } from "quark-html5"; // Modifies the prototypes automatically
import * as URI from "urijs";

// Get the current version
document.write(`The current version is ${process.version}`);

// Create an rootElement
let rootElement = document.createElement("div");
rootElement.style.left = "30px";
rootElement.style.right = "0";
rootElement.style.top = "30px";
rootElement.style.bottom = "0";
document.body.appendChild(rootElement);

// Create and start the instance
let instance = new QKInstance(new QKModule(new URI("/Users/NathanFlurry/Documents/Dev/Vesto/Code/test-module")));
instance.start(rootElement);
