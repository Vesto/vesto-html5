import { app, BrowserWindow } from 'electron';

// Get a path to where the client folder is located with the resources
let clientPath = `file://${__dirname}/../client`;

// Create the window whenever ready // TODO: Use window.setThumbarButtons ?
app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        frame: false, // Don't add a frame
        titleBarStyle: 'hidden-inset', // Inset the buttons so can show custom title bar
        webPreferences: {
            blinkFeatures: "PointerEvent" // Enables pointer events
        }
    });
    mainWindow.loadURL(`${clientPath}/index.html`);
});
