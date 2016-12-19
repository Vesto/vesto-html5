import "quark-html5"; // Modifies the prototypes automatically
import { View, ViewBacking, Color, Rect } from "quark";

// Get the current version
document.write(`The current version is ${process.version}`);

// let rootView = new QKView(document.body);
let rootView = new View();
rootView.rect = new Rect(10, 10, 300, 300);
rootView.backgroundColor = new Color(1, 0, 0, 1);

let documentView = new View(document.body as ViewBacking);
documentView.addSubview(rootView);

let view = new View();
view.rect = new Rect(10, 10, 100, 100);
view.backgroundColor = new Color(0, 1, 0, 1);
rootView.addSubview(view);

console.log("Done");
