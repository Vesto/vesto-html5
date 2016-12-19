import "quark-html5"; // Modifies the prototypes automatically
import { View, ViewBacking, Color, Rect, Shadow, Point } from "quark";

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
view.shadow = new Shadow(new Point(0, 10), 10, new Color(0, 0, 1, 0.5));
view.cornerRadius = 8;
rootView.addSubview(view);

setInterval(() => {
    view.alpha = Math.random();
}, 500);
setInterval(() => {
    view.isHidden = !view.isHidden;
}, 100);

console.log("Done");
