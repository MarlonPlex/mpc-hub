const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld("electronAPI", {
    onLoadTrackData: (callback) => ipcRenderer.on("tracklist-loaded", (_event, trackData) => callback(trackData))
});

