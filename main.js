const {app, dialog, BrowserWindow} = require('electron');
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
autoUpdater.logger = log;

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Update Ready',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new update is ready!'
  }
  dialog.showMessageBox(dialogOpts).then((returnValue) => {if (returnValue.response === 0) autoUpdater.quitAndInstall()})
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    autoHideMenuBar: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(`file://${__dirname}/index.html#v${app.getVersion()}`);
}
autoUpdater.on('update-available', (info) => {sendStatusToWindow('New update downloading...')})
function sendStatusToWindow(text) {log.info(text);mainWindow.webContents.send('message', text);}
app.whenReady().then(() => {createWindow();autoUpdater.checkForUpdatesAndNotify();})
