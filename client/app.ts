import { QKInstance, QKModule, QKView } from "quark-html5"; // Modifies the prototypes automatically
import { webFrame } from "electron";
import * as URI from "urijs";

// Prevent zooming in the viewport
webFrame.setLayoutZoomLevelLimits(0, 0);
// webFrame.setVisualZoomLevelLimits(0, 0); // TODO: This prevents trackpad two finger double tap) scrolling, but crashes Electron

// Style root view to fit the viewport
let rootView = new QKView();
rootView.style.position = "absolute";
rootView.style.width = "";
rootView.style.height = "";
rootView.style.left = rootView.style.right = rootView.style.top = rootView.style.bottom = "0";
document.body.appendChild(rootView);

// Create and start the instance
let instance = new QKInstance(new QKModule(new URI("/Users/NathanFlurry/Documents/Dev/Vesto/Code/test-module")));
instance.start(rootView);
