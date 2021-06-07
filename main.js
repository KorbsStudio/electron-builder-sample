const {app, BrowserWindow} = require('electron')

function createWindow () {
  // Show and control the main window of your application
  // Electron Docs: https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    autoHideMenuBar: true
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {createWindow()})