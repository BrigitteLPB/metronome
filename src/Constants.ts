import { Log } from "./Log.js";
import * as fs from 'fs'

export const PATH = {
	RELATIVE_PATH_TO_ASSETS : `${process.env['NODE_PATH']}/assets`,
	LOG : `${process.env['NODE_PATH']}\\log`
}


if (!fs.existsSync(PATH.LOG)){
	fs.mkdirSync(PATH.LOG);
}

export const logUtil = new Log.Utils([
	process.stdout,
	fs.createWriteStream(`${PATH.LOG}/.log`, {
		encoding: 'utf-8',
		flags: 'as'
	})
]);