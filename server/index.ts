import { app, BrowserWindow } from 'electron';

// Get a path to where the client folder is located with the resources
let clientPath = `file://${__dirname}/../client`;

// Create the window whenever ready
app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        frame: false, // Don't add a frame
        titleBarStyle: 'hidden-inset' // Inset the buttons so can show custom title bar
    });
    mainWindow.loadURL(`${clientPath}/index.html`);
});
