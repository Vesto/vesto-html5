import "quark-html5"; // Modifies the prototypes automatically
import { View, ViewBacking, Color, Rect, Shadow, Point, InteractionEvent, EventPhase, InteractionType } from "quark";

// Get the current version
document.write(`The current version is ${process.version}`);

class DraggableView extends View {
    private previousLocation?: Point;

    interactionEvent(event: InteractionEvent): boolean {
        console.log("Interaction");
        if (event.type == InteractionType.LeftMouse) {
            if (event.phase == EventPhase.Began)
                this.previousLocation = event.location;
            else if (event.phase == EventPhase.Changed)
                this.updatePosition(event.location);
            else if (event.phase == EventPhase.Ended || event.phase == EventPhase.Cancelled)
                this.previousLocation = undefined;
            return true;
        }

        return super.interactionEvent(event);
    }

    private updatePosition(location: Point) {
        // Make sure there's a previous position
        if (typeof this.previousLocation == "undefined")
            return;

        // Move the view
        let delta = location.add(this.previousLocation.inverse());
        this.rect = new Rect(
            this.rect.x + delta.x, this.rect.y + delta.y,
            this.rect.width, this.rect.height
        );

        // Save the previous position
        this.previousLocation = location;
    }
}

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
// rootView.addSubview(view);

setInterval(() => {
    view.alpha = Math.random();
}, 500);
setInterval(() => {
    view.isHidden = !view.isHidden;
}, 100);

let draggable = new DraggableView();
draggable.rect = new Rect(50, 50, 100, 100);
draggable.backgroundColor = new Color(1, 0, 1, 1);
rootView.addSubview(draggable);


console.log("Done");
