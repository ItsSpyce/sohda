import { ipcMain } from 'electron';
import { Mix } from 'sohda-api';

ipcMain.on('installPackage', (event, mix: Mix) => {
  if (!event.isTrusted) {
    event.reply('installPackageRequest', {
      wasSuccessful: false,
      data: 'Package install originated from untrusted source',
    });
  }
});

ipcMain.on('uninstallPackage', (event, mix: Mix) => {
  if (!event.isTrusted) {
    event.reply('uninstallPackageRequest', {
      wasSuccessful: false,
      data: 'Package uninstall originated from untrusted source',
    });
  }
});
