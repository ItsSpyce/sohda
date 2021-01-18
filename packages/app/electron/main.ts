import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import Store from 'electron-store';
import isDev from 'electron-is-dev';
import { Config } from '../types';

const store = new Store<Config>();
let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://localhost:4000`);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function exit() {
  if (store.get('exitOnClose', true)) {
    app.exit(0);
  }
}

app.on('ready', createWindow);
app.on('window-all-closed', exit);
app.allowRendererProcessReuse = true;
