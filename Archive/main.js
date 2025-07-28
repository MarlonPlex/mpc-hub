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


  const musicDirectory = app.getPath("music");
  var filteredFilePaths = [];
  try {
    const fileNames = fs.readdirSync(musicDirectory);
    let filePaths = fileNames.map((fileName) => path.join(musicDirectory, fileName));
    filteredFilePaths = filePaths.filter((filePath) => fs.lstatSync(filePath).isFile());
  } catch (error) {
    console.error(`Error retrieving file paths from directory ${musicDirectory}`, error);    
  }

  filteredFilePaths.forEach((filePath, index, arr) => {
    if(path.extname(filePath) !== ".mp3") {
      arr.splice(index, 1);
    }
  });

  let trackData = updateData(filteredFilePaths);

  
  win.webContents.on('did-finish-load', () => {
    win.webContents.send("tracklist-loaded", trackData);
  });

  win.maximize();

  // win.webContents.openDevTools();
  
  win.loadFile('index.html');
}


app.whenReady().then(() => {
  createWindow()    
  

})

/* Helper Functions */

// updateData() parses necessary info from track's file path string to populate the object array named trackData.
// This data in this array's objects will be used for updating the UI and loading the tracks.
function updateData(filePaths) {
  let trackData = [];

  for (const filePath of filePaths) {
    let trackTitleString = path.basename(filePath, ".mp3");
    
    // .split() below Assumes the track artists and name is split by a hyphen surrounded by whitespace. 
    // This could cause issues for track titles that do not follow this pattern. Will need to revisit this/enforce this formating.
    let trackTitleArray = trackTitleString.split(" - ");
    
    let trackCount = trackData.push({});
    let lastIndex = trackCount - 1;

    trackData[lastIndex].artist = trackTitleArray[0];
    trackData[lastIndex].genres = [];
    trackData[lastIndex].name = trackTitleArray[1];
    trackData[lastIndex].path = filePath;
    trackData[lastIndex].tags = [];
    
  };

  return trackData;
};