const { app, BrowserWindow, shell } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

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
  filteredFilePaths = [];
  try {
    const fileNames = fs.readdirSync(musicDirectory);
    filePaths = fileNames.map((fileName) => path.join(musicDirectory, fileName));
    filteredFilePaths = filePaths.filter((filePath) => fs.lstatSync(filePath).isFile());
  } catch (error) {
    console.error(`Error retrieving file paths from directory ${musicDirectory}`, error);    
  }

  filteredFilePaths.forEach((filePath, index, arr) => {
    if(path.extname(filePath) !== ".mp3") {
      arr.splice(index, 1);
    }
  });


  // TODO: Task 2.3
  console.log(filteredFilePaths);

})