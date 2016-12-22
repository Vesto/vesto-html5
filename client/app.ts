import { QKInstance, QKModule, QKWindow } from "quark-html5"; // Modifies the prototypes automatically
import * as URI from "urijs";

// Get the current version
document.write(`The current version is ${process.version}`);

// Create an element
let element = document.createElement("div");
element.style.left = "10px";
element.style.right = "10px";
element.style.top = "10px";
element.style.bottom = "10px";
document.body.appendChild(element);

// Create a window
let window = new QKWindow(element);

// Create and start the instance
let instance = new QKInstance(new QKModule(new URI("/Users/NathanFlurry/Documents/Dev/Vesto/Code/test-module")));
instance.start(window);
