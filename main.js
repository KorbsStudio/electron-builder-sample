const {app, dialog, BrowserWindow} = require('electron');
const {autoUpdater} = require("electron-updater");

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Update Ready',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'New update has been downloaded, to apply the new update please restart the application.'
  }

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
})

autoUpdater.on('error', message => {
  console.error('An error occured when updating the application.')
  console.error(message)
})

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    autoHideMenuBar: true
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
})
