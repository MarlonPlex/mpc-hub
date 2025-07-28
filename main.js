const { Menu } = require('electron');
const { app, BrowserWindow } = require('electron/main');
const fs = require('node:fs');
const path = require('node:path');



/* Electron App Functions*/

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    }
  })

  //TODO: Remove menu and title bar. Custom title bar.
  
  win.maximize();

  // win.webContents.openDevTools();s
  
  win.loadFile('index.html');
}


app.whenReady().then(() => {
  createWindow()    

})

