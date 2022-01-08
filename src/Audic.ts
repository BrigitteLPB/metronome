import Audic from "audic";
import { logUtil, PATH } from "./Constants.js";

let fn = async () => {
	let audio = new Audic(`${PATH.RELATIVE_PATH_TO_ASSETS}/tac_mono.mp3`);

	await logUtil.info("playing sound !");

	await audio.play();

	audio.addEventListener('ended', () => {
		audio.destroy();
	}, {
		once: true,
		capture: true
	});
}


fn();
