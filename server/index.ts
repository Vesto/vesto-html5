import { app, BrowserWindow } from 'electron';

/*
NOTE ABOUT CHROME VERSION:
Need Chrome 54 for ResizeObserve
So I built it myself (off the Chrome54 branch of Electron) and replaced the binary in the prebuilt
Simply replace node_modules/electron-prebuilt/dist/Electron.app with the new version
 */

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
            blinkFeatures: "PointerEvent", // Enables pointer events
            experimentalFeatures: true // Enable the experimental features (for `ResizeObserver`)
        }
    });
    mainWindow.loadURL(`${clientPath}/index.html`);
    mainWindow.webContents.openDevTools();
});
