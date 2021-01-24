import util from 'util';
import { WebContents, remote } from 'electron';
import fs from 'fs';
import { Mix } from 'sohda-api';
import { cleanGlobal } from './bootstrap';

const readFile = util.promisify(fs.readFile);

export async function loadMix(mix: Mix) {
  // load the mix
}
