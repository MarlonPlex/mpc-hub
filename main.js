const { app, BrowserWindow, shell } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const { fileURLToPath } = require('node:url');


/* Electron App functions*/
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow()    

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


  let trackData = [
    {
      name: "Stronger",
      path: "",
      artists: "TheFatRat",
      genres: [],
      tags:[],
    },
    {
      name: "Still Kids",
      path: "",
      artists: "Virutal Riot",
      genres: [],
      tags:[],
    },
    {
      artists: "Apashe, Waisu",
      genres: ["EDM", "Trap"],
      name: "Human",
      path: "",
      tags:[],
    },
  ];

  updateData(filteredFilePaths);


  /* TODO: Task 2.4 - update the UI*/

})

/* Auxillary functions*/

/*
updateData() Extracts necessary info from track's file path to populate trackData object array.
this object array will be used for updating the UI and loading the tracks.
*/
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
  console.log(trackData);
};